import { useState, useCallback, useRef } from 'react';

interface TranslationResult {
  translatedText: string;
}

interface TranslationCache {
  [key: string]: string;
}

// MyMemory API has a 500 character limit per request
const CHUNK_SIZE = 450;

// Split text into chunks while preserving markdown structure and respecting API limits
function splitIntoChunks(text: string): string[] {
  const chunks: string[] = [];
  let currentChunk = '';
  const lines = text.split('\n');

  for (const line of lines) {
    // If adding this line exceeds chunk size
    if ((currentChunk.length + line.length + 1) > CHUNK_SIZE && currentChunk) {
      chunks.push(currentChunk.trim());
      currentChunk = '';
    }

    // If the line itself is larger than chunk size, we need to split it
    if (line.length > CHUNK_SIZE) {
      let remainingLine = line;
      while (remainingLine.length > CHUNK_SIZE) {
        // Find a split point (last space before CHUNK_SIZE)
        let splitIndex = remainingLine.lastIndexOf(' ', CHUNK_SIZE);
        if (splitIndex === -1) {
          // No space found, force split
          splitIndex = CHUNK_SIZE;
        }
        chunks.push(remainingLine.slice(0, splitIndex).trim());
        remainingLine = remainingLine.slice(splitIndex).trim();
      }
      currentChunk = currentChunk ? currentChunk + '\n' + remainingLine : remainingLine;
    } else {
      currentChunk = currentChunk ? currentChunk + '\n' + line : line;
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

async function translateChunk(text: string, sourceLang: string, targetLang: string): Promise<string> {
  if (!text.trim()) return text;

  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`
  );

  if (!response.ok) {
    throw new Error('Translation API request failed');
  }

  const data = await response.json();

  if (data.responseStatus !== 200) {
    throw new Error(data.responseDetails || 'Translation failed');
  }

  return data.responseData.translatedText;
}

export function useContentTranslation() {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isTranslated, setIsTranslated] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);
  const cacheRef = useRef<TranslationCache>({});

  const translate = useCallback(async (content: string, targetLang: string, sourceLang: string = 'en') => {
    // Simple hash function for content
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
        const char = content.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    const cacheKey = `${hash}_${sourceLang}_${targetLang}`;

    // Check cache first
    if (cacheRef.current[cacheKey]) {
      setTranslatedContent(cacheRef.current[cacheKey]);
      setIsTranslated(true);
      setCurrentLanguage(targetLang);
      return;
    }

    setIsTranslating(true);
    setError(null);

    try {
      const chunks = splitIntoChunks(content);
      const translatedChunks: string[] = [];

      for (const chunk of chunks) {
        const translated = await translateChunk(chunk, sourceLang, targetLang);
        translatedChunks.push(translated);
      }

      const fullTranslation = translatedChunks.join('\n\n');
      cacheRef.current[cacheKey] = fullTranslation;
      setTranslatedContent(fullTranslation);
      setIsTranslated(true);
      setCurrentLanguage(targetLang);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Translation failed. Please try again.');
      console.error('Translation error:', err);
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const resetTranslation = useCallback(() => {
    setTranslatedContent(null);
    setIsTranslated(false);
    setCurrentLanguage(null);
    setError(null);
  }, []);

  return {
    translate,
    isTranslating,
    translatedContent,
    error,
    isTranslated,
    currentLanguage,
    resetTranslation,
  };
}
