import { ThemeDefinition, createVuetify } from "vuetify";
import { ja } from "vuetify/locale";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary_600: "#0041A3",
    primary_500: "#0856CC",
    primary_400: "#518AE0",
    primary_100: "#E8F1FF",
    primary: "#0D47A1",
    secondary: "#5DBEDC",
    tertiary: "#518AE0",
    quaternary: "#FFFFFF",
    accent: "#FFFFFF",
    background: "#DFE6F3",
    requiredField: "#F44336",
    requiredText: "#FFFFFF",
    noSetting: "#9E9E9E",
    register: "#EF6C00",
    tableRowError: "#FFEBEE",
    todoBox: "#6d788f",
    caution: "#F44336",
    content: "616161",
    searchBackground: "#FFFFFF",
    calendar: "#424242",
    calendarBorder: "#e0e0e0",
    newReservation: "#5164e0",
    gray600: "#374052",
    gray500: "#455066",
    gray400: "#6D788F",
    gray100: "#E3E9F5",
    hover: "#E3E3E3",
    holiday: "#F5F5F5",
  },
};

export default createVuetify({
  locale: {
    locale: "ja",
    fallback: "ja",
    messages: {
      ja,
    },
  },
  theme: {
    themes: {
      light: myCustomLightTheme,
    },
  },
});
