import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.53fbf81dd08b4c45903413eec2332906',
  appName: 'Pencil Styles',
  webDir: 'dist',
  server: {
    url: "https://53fbf81d-d08b-4c45-9034-13eec2332906.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#1a1a1a",
      showSpinner: false
    }
  }
};

export default config;