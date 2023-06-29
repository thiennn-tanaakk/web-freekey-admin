export enum Challenge {
  "MFA_SETUP" = "MFA_SETUP",
  "SOFTWARE_TOKEN_MFA" = "SOFTWARE_TOKEN_MFA",
  "NEW_PASSWORD_REQUIRED" = "NEW_PASSWORD_REQUIRED",
}

export interface MenuItem {
  title: string;
  name?: string;
  icon: string;
  to?: Location;
  hidden?: boolean;
  requiredAuthorities?: string[];
  children?: MenuItem[];
}

export const navigationMenuItems: MenuItem[] = [
  {
    title: "Admin menu",
    icon: "",
    children: [
      {
        title: "Bqey manager",
        icon: "",
        children: [
          {
            title: "TR manager register",
            icon: "",
          },
        ],
      },
      {
        title: "TR manager",
        icon: "",
        children: [
          {
            title: "TR user register",
            icon: "",
          },
          {
            title: "Agency admin register",
            icon: "",
          },
          {
            title: "Master role setting",
            icon: "",
          },
          {
            title: "Agency type setting",
            icon: "",
          },
          {
            title: "Box type setting",
            icon: "",
          },
          {
            title: "Alcohol meter setting",
            icon: "",
          },
          {
            title: "Payment system setting",
            icon: "",
          },
          {
            title: "Agency expense setting",
            icon: "",
          },
        ],
      },
      {
        title: "Agency manager",
        icon: "",
        children: [
          {
            title: "Agency user register",
            icon: "",
          },
          {
            title: "Master role setting",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    title: "User menu",
    icon: "",
    children: [
      {
        title: "TR user",
        icon: "",
        children: [
          {
            title: "Manage organization customers",
            icon: "",
          },
          {
            title: "Manage contracts",
            icon: "",
          },
          {
            title: "Manage payments",
            icon: "",
          },
          {
            title: "Manage agency",
            icon: "",
          },
          {
            title: "Manage agency expenses",
            icon: "",
          },
        ],
      },
      {
        title: "Agency user",
        icon: "",
        children: [
          {
            title: "Manage organization customers",
            icon: "",
          },
          {
            title: "Manage contracts",
            icon: "",
          },
          {
            title: "Manage payments ",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    title: "Monitor menu ",
    icon: "",
    children: [
      {
        title: "organization customer screen",
        icon: "",
      },
    ],
  },
];
