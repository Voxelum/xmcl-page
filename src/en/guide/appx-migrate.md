# AppX Migration

This page will guide you how to migrate your data from appx installation to zip installation.

The idea is simple: just copying the AppData xmcl folder for AppX app to common AppData location.

> [!IMPORTANT]
> DO **NOT** delete the AppX version app in the migration process.

## Find your AppX data

Go to the following path to find your AppX data

```cmd [Windows (APPX/appinstaller)]
# Version < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Version >= 0.34 and < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```

::: tip
Use the input box (for routing) in the File Explorer to navigate to the path mentioned above.
:::

## Copy the data to common AppData

Copy the entire `xmcl` folder in the previous step to

```cmd [Windows]
%AppData%\xmcl
```

## Start the new XMCL and delete the old one

After copying the data, you can start the new XMCL from zip.

Once you have confirmed that the new XMCL works properly, you can delete the old XMCL app.

::: tip
Deleting AppX app will **automatically** remove the old data, so you don't need to worry about the data left behind.
:::
