import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Warning, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PlatformWarningProps {
  detectedOS: string;
  selectedOS: string;
  onContinue: () => void;
  onCancel: () => void;
}

export const PlatformWarning = ({ detectedOS, selectedOS, onContinue, onCancel }: PlatformWarningProps) => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanProceed(true);
    }
  }, [timeLeft]);

  // Создаем портал для модального окна
  const modal = (
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 999999
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 animate-fade-in" 
        onClick={onCancel}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      
      {/* Modal Content */}
      <Card 
        className="relative p-8 max-w-md w-full bg-[#1c1c1c] border border-[#2d2d2d] shadow-2xl rounded-2xl" 
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', zIndex: 1 }}
      >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Warning className="w-8 h-8 text-[#ea4c3c]" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Предупреждение о платформе
              </h3>
              <p className="text-slate-400 mb-4">
                Мы обнаружили, что вы используете <span className="font-semibold text-[#ea4c3c]">{detectedOS}</span>, 
                но выбираете версию для <span className="font-semibold text-[#ea4c3c]">{selectedOS}</span>.
              </p>
              <p className="text-slate-400 mb-6">
                Пакет для другой операционной системы может не запуститься или работать некорректно.
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={onCancel}
                  variant="outline"
                  className="flex-1 border-[#2d2d2d] hover:bg-[#121212] text-slate-300 hover:text-white"
                >
                  <X className="w-4 h-4 mr-2" />
                  Отмена
                </Button>
                <Button
                  onClick={onContinue}
                  disabled={!canProceed}
                  className="flex-1 bg-[#ea4c3c] hover:bg-[#d63e2c] text-white border-0"
                >
                  {canProceed ? 'Продолжить' : `Ждите ${timeLeft}с`}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
  );

  // Рендерим модальное окно в портале
  return ReactDOM.createPortal(modal, document.body);
};