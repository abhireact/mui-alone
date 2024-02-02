// Material Dashboard 2 PRO React layouts
import Analytics from "layouts/dashboards/analytics";
import Sales from "layouts/dashboards/sales";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import AllProjects from "layouts/pages/profile/all-projects";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Timeline from "layouts/pages/projects/timeline";
import PricingPage from "layouts/pages/pricing-page";
import Widgets from "layouts/pages/widgets";
import RTL from "layouts/pages/rtl";
import Charts from "layouts/pages/charts";
import Notifications from "layouts/pages/notifications";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpCover from "layouts/authentication/sign-up/cover";
import ResetCover from "layouts/authentication/reset-password/cover";

// Material Dashboard 2 PRO React TS components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/team-3.jpg";

import Testing_page from "layouts/pages/test";
import Test1 from "layouts/pages/test1";
import Login from "layouts/pages/login";
import Orgprofile from "layouts/pages/orgprofile";
import Worklocations from "layouts/pages/worklocations";
import Trialanderror from "layouts/pages/trialanderror";
import Departments from "layouts/pages/departments";
import Designations from "layouts/pages/designations";

import General from "layouts/pages/general";
import Emaileditor from "layouts/pages/emaileditor";
import Workingdays from "layouts/pages/workingdays";
import Compensatoryrequest from "layouts/pages/compensatoryrequest";
import Statutory from "layouts/pages/professional_tax/statutory";
import Editemployee from "layouts/pages/editemployee";
import Orgtree from "layouts/pages/orgtree";
import Newhires from "layouts/pages/newhires";
import Birthdayfolks from "layouts/pages/birthdayfolks";
import Applyleave from "layouts/pages/leaveapplications/leaveapplications";
import EPF from "layouts/pages/statutoryreports/epfsummary";
import Listview from "layouts/pages/leaveapplications/listview";
import Labourfund from "layouts/pages/labourfund";
import Addshift from "layouts/pages/addshift";
import Shiftdetails from "layouts/pages/shiftdetails";
import Employeesm from "layouts/pages/employee_shift_mapper";

import Breakshift from "layouts/pages/breakshift/breakshift";
import Addbreak from "layouts/pages/breakshift/addbreak";
import Showdrag from "layouts/pages/showdraggable";
import Taxwork from "layouts/pages/taxworksheet";
import Showholiday from "layouts/pages/holiday/showholiday";
import Orgreport from "layouts/pages/organization_report/leave";
import LTWreport from "layouts/pages/organization_report/leavetypesummary";
import Dailyleave from "layouts/pages/organization_report/dailyleavestatus";
import Manageloan from "layouts/pages/loan/manageloan";
import Viewrecord from "layouts/pages/loan/viewrecord";
import Holiday from "layouts/pages/holiday/showholiday";
import Showemp from "layouts/employees/showemp";
import Showrole from "layouts/pages/roles_crud/show_role";
import Form from "layouts/pages/form16/form16";
import SalaryTemp from "layouts/pages/salarytemplate/salary_template";
import CompanySetup from "layouts/pages/hospital/viewcompany";
import CreateCompany from "layouts/pages/hospital/companysetup";
import ClientInfo from "layouts/pages/hospital/clientinfo";
import GeneralSetting from "layouts/pages/hospital/generalsetting";
import TaxationSetting from "layouts/pages/hospital/taxationsetting";
const routes = [
  {
    type: "collapse",
    name: "Brooklyn Alice",
    key: "brooklyn-alice",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "My Profile",
        key: "my-profile",
        route: "/pages/profile/profile-overview",
        component: <ProfileOverview />,
      },
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: <Settings />,
      },
      {
        name: "Logout",
        key: "logout",
        route: "/authentication/sign-in/basic",
        component: <SignInBasic />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "Analytics",
        key: "analytics",
        route: "/dashboards/analytics",
        component: <Analytics />,
      },
      {
        name: "Sales",
        key: "sales",
        route: "/dashboards/sales",
        component: <Sales />,
      },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <Icon fontSize="medium">image</Icon>,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        collapse: [
          {
            name: "Profile Overview",
            key: "profile-overview",
            route: "/pages/profile/profile-overview",
            component: <ProfileOverview />,
          },
          {
            name: "All Projects",
            key: "all-projects",
            route: "/pages/profile/all-projects",
            component: <AllProjects />,
          },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component: <NewUser />,
          },
        ],
      },
      {
        name: "Reports",
        key: "reports",
        collapse: [
          {
            name: "EPF Summary",
            key: "epfsummary",
            route: "/pages/statutoryreports/epfsummary",
            component: <EPF />,
          },
        ],
      },

      {
        name: "INTERNSHIP",
        key: "intern",
        collapse: [
          {
            name: "Taxation Setting",
            key: "taxationsetting",
            route: "/pages/intern/taxationsetting",
            component: <TaxationSetting />,
          },
          {
            name: "General Setting",
            key: "generalsetting",
            route: "/pages/intern/generalsetting",
            component: <GeneralSetting />,
          },
          {
            name: "Company Setup",
            key: "companysetup",
            route: "/pages/intern/companysetup",
            component: <CompanySetup />,
          },
          {
            name: " Create Company Setup",
            key: "createcompany",
            route: "/pages/intern/createcompany",
            component: <CreateCompany />,
          },
          {
            name: "Client Info",
            key: "clientinfo",
            route: "/pages/intern/clientinfo",
            component: <ClientInfo />,
          },
          {
            name: "Form16",
            key: "form16",
            route: "/pages/intern/form16",
            component: <Form />,
          },
          {
            name: "Role",
            key: "showrole",
            route: "/pages/intern/showrole",
            component: <Showrole />,
          },
          {
            name: "Employee",
            key: "showemp",
            route: "/pages/intern/showemp",
            component: <Showemp />,
          },
          {
            name: "Holiday",
            key: "holiday",
            route: "/pages/intern/holiday",
            component: <Holiday />,
          },
          {
            name: "Loan",
            key: "loan",
            route: "/pages/intern/loan",
            component: <Viewrecord />,
          },

          {
            name: "Daily Leave Status",
            key: "dlstatus",
            route: "/pages/intern/dlstatus",
            component: <Dailyleave />,
          },
          {
            name: "Leave Type Wise Report",
            key: "ltwreport",
            route: "/pages/intern/ltwreport",
            component: <LTWreport />,
          },
          {
            name: "Organization Report",
            key: "orgreport",
            route: "/pages/intern/orgreport",
            component: <Orgreport />,
          },
          {
            name: "Show Holiday",
            key: "showholiday",
            route: "/pages/intern/showholiday",
            component: <Showholiday />,
          },
          {
            name: "Tax Worksheet",
            key: "taxworksheet",
            route: "/pages/intern/taxworksheet",
            component: <Taxwork />,
          },
          {
            name: "Drag and Drop Page",
            key: "showdraggable",
            route: "/pages/intern/showdraggable",
            component: <Showdrag />,
          },
          {
            name: "Break ",
            key: "breakshift",
            route: "/pages/intern/breakshift",
            component: <Breakshift />,
          },
          {
            name: " Add Break ",
            key: "addbreak",
            route: "/pages/intern/addbreak",
            component: <Addbreak />,
          },
          {
            name: "Employee Shift Mapper",
            key: "employee_shift_mapper",
            route: "/pages/intern/employee_shift_mapper",
            component: <Employeesm />,
          },
          {
            name: "ADD SHIFT",
            key: "addshift",
            route: "/pages/intern/addshift",
            component: <Addshift />,
          },
          {
            name: "SHIFT DETAILS",
            key: "shiftdetails",
            route: "/pages/intern/shiftdetails",
            component: <Shiftdetails />,
          },
          {
            name: "StatutoryComponents PT",
            key: "statutorycomponentpt",
            route: "/pages/intern/statutorycomponentpt",
            component: <Statutory />,
          },
          {
            name: "StatutoryComponents LWF",
            key: "statutorycomponentlwf",
            route: "/pages/intern/statutorycomponentlwf",
            component: <Labourfund />,
          },
          {
            name: "Salary Template",
            key: "salarytemplate",
            route: "/pages/intern/salarytemplate",
            component: <SalaryTemp />,
          },

          {
            name: "Leave Applications",
            key: "applyleave",
            route: "/pages/intern/applyleave",
            component: <Applyleave />,
          },
          {
            name: "List View",
            key: "listview",
            route: "/pages/intern/listview",
            component: <Listview />,
          },
          {
            name: "New Hires",
            key: "newhires",
            route: "/pages/intern/newhires",
            component: <Newhires />,
          },
          {
            name: "Birthday Folks",
            key: "birthdayfolks",
            route: "/pages/intern/birthdayfolks",
            component: <Birthdayfolks />,
          },
          {
            name: "Organisation Tree",
            key: "orgtree",
            route: "/pages/intern/orgtree",
            component: <Orgtree />,
          },

          {
            name: "Organisation Profile",
            key: "orgprofile",
            route: "/pages/intern/orgprofile",
            component: <Orgprofile />,
          },
          {
            name: "Work Locations",
            key: "worklocations",
            route: "/pages/intern/worklocations",
            component: <Worklocations />,
          },

          {
            name: "Departments",
            key: "departments",
            route: "/pages/intern/departments",
            component: <Departments />,
          },
          {
            name: "Designations",
            key: "designations",
            route: "/pages/intern/designations",
            component: <Designations />,
          },
          {
            name: "Trial and Error",
            key: "trialanderror",
            route: "/pages/intern/trialanderror",
            component: <Trialanderror />,
          },
          {
            name: "General Settings",
            key: "general",
            route: "/pages/intern/general",
            component: <General />,
          },
          {
            name: "Email Template",
            key: "emailtemplate",
            route: "/pages/intern/emaileditor",
            component: <Emaileditor />,
          },
          {
            name: "WorkingDays",
            key: "workingdays",
            route: "/pages/intern/workingdays",
            component: <Workingdays />,
          },
          {
            name: "Compensatory Request",
            key: "compensatoryrequest",
            route: "/pages/intern/compensatoryrequest",
            component: <Compensatoryrequest />,
          },

          {
            name: "Edit Employee",
            key: "editemployee",
            route: "/pages/intern/editemployee",
            component: <Editemployee />,
          },
        ],
      },

      {
        name: "Practice",
        key: "practice",
        collapse: [
          {
            name: "Test",
            key: "test",
            route: "/pages/practice/test",
            component: <Testing_page />,
          },
          {
            name: "Test1",
            key: "test1",
            route: "/pages/practice/test1",
            component: <Test1 />,
          },
          {
            name: "Logintest",
            key: "logintest",
            route: "/pages/practice/logintest",
            component: <Login />,
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "/pages/account/settings",
            component: <Settings />,
          },
          {
            name: "Billing",
            key: "billing",
            route: "/pages/account/billing",
            component: <Billing />,
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "/pages/account/invoice",
            component: <Invoice />,
          },
        ],
      },
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "Timeline",
            key: "timeline",
            route: "/pages/projects/timeline",
            component: <Timeline />,
          },
        ],
      },
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
        component: <PricingPage />,
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl", component: <RTL /> },
      { name: "Widgets", key: "widgets", route: "/pages/widgets", component: <Widgets /> },
      { name: "Charts", key: "charts", route: "/pages/charts", component: <Charts /> },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
        component: <Notifications />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <Icon fontSize="medium">apps</Icon>,
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        component: <Kanban />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        component: <Wizard />,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        component: <DataTables />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        component: <Calendar />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <Icon fontSize="medium">shopping_basket</Icon>,
    collapse: [
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
            component: <NewProduct />,
          },
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/ecommerce/products/edit-product",
            component: <EditProduct />,
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/ecommerce/products/product-page",
            component: <ProductPage />,
          },
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
            component: <OrderList />,
          },
          {
            name: "Order Details",
            key: "order-details",
            route: "/ecommerce/orders/order-details",
            component: <OrderDetails />,
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Icon fontSize="medium">content_paste</Icon>,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCover />,
          },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
        ],
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "Basic",
    key: "basic",
    icon: <Icon fontSize="medium">upcoming</Icon>,
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        collapse: [
          {
            name: "Overview",
            key: "overview",
            href: "https://www.creative-tim.com/learning-lab/react/overview/material-dashboard/",
          },
          {
            name: "License",
            key: "license",
            href: "https://www.creative-tim.com/learning-lab/react/license/material-dashboard/",
          },
          {
            name: "Quick Start",
            key: "quick-start",
            href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/",
          },
          {
            name: "Build Tools",
            key: "build-tools",
            href: "https://www.creative-tim.com/learning-lab/react/build-tools/material-dashboard/",
          },
        ],
      },
      {
        name: "Foundation",
        key: "foundation",
        collapse: [
          {
            name: "Colors",
            key: "colors",
            href: "https://www.creative-tim.com/learning-lab/react/colors/material-dashboard/",
          },
          {
            name: "Grid",
            key: "grid",
            href: "https://www.creative-tim.com/learning-lab/react/grid/material-dashboard/",
          },
          {
            name: "Typography",
            key: "base-typography",
            href: "https://www.creative-tim.com/learning-lab/react/base-typography/material-dashboard/",
          },
          {
            name: "Borders",
            key: "borders",
            href: "https://www.creative-tim.com/learning-lab/react/borders/material-dashboard/",
          },
          {
            name: "Box Shadows",
            key: "box-shadows",
            href: "https://www.creative-tim.com/learning-lab/react/box-shadows/material-dashboard/",
          },
          {
            name: "Functions",
            key: "functions",
            href: "https://www.creative-tim.com/learning-lab/react/functions/material-dashboard/",
          },
          {
            name: "Routing System",
            key: "routing-system",
            href: "https://www.creative-tim.com/learning-lab/react/routing-system/material-dashboard/",
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Components",
    key: "components",
    icon: <Icon fontSize="medium">view_in_ar</Icon>,
    collapse: [
      {
        name: "Alerts",
        key: "alerts",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-dashboard/",
      },
      {
        name: "Avatar",
        key: "avatar",
        href: "https://www.creative-tim.com/learning-lab/react/avatar/material-dashboard/",
      },
      {
        name: "Badge",
        key: "badge",
        href: "https://www.creative-tim.com/learning-lab/react/badge/material-dashboard/",
      },
      {
        name: "Badge Dot",
        key: "badge-dot",
        href: "https://www.creative-tim.com/learning-lab/react/badge-dot/material-dashboard/",
      },
      {
        name: "Box",
        key: "box",
        href: "https://www.creative-tim.com/learning-lab/react/box/material-dashboard/",
      },
      {
        name: "Buttons",
        key: "buttons",
        href: "https://www.creative-tim.com/learning-lab/react/buttons/material-dashboard/",
      },
      {
        name: "Date Picker",
        key: "date-picker",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-dashboard/",
      },
      {
        name: "Dropzone",
        key: "dropzone",
        href: "https://www.creative-tim.com/learning-lab/react/dropzone/material-dashboard/",
      },
      {
        name: "Editor",
        key: "editor",
        href: "https://www.creative-tim.com/learning-lab/react/quill/material-dashboard/",
      },
      {
        name: "Input",
        key: "input",
        href: "https://www.creative-tim.com/learning-lab/react/input/material-dashboard/",
      },
      {
        name: "Pagination",
        key: "pagination",
        href: "https://www.creative-tim.com/learning-lab/react/pagination/material-dashboard/",
      },
      {
        name: "Progress",
        key: "progress",
        href: "https://www.creative-tim.com/learning-lab/react/progress/material-dashboard/",
      },
      {
        name: "Snackbar",
        key: "snackbar",
        href: "https://www.creative-tim.com/learning-lab/react/snackbar/material-dashboard/",
      },
      {
        name: "Social Button",
        key: "social-button",
        href: "https://www.creative-tim.com/learning-lab/react/social-buttons/material-dashboard/",
      },
      {
        name: "Typography",
        key: "typography",
        href: "https://www.creative-tim.com/learning-lab/react/typography/material-dashboard/",
      },
    ],
  },
  {
    type: "collapse",
    name: "Change Log",
    key: "changelog",
    href: "https://github.com/creativetimofficial/ct-material-dashboard-pro-react/blob/main/CHANGELOG.md",
    icon: <Icon fontSize="medium">receipt_long</Icon>,
    noCollapse: true,
  },
];

export default routes;
