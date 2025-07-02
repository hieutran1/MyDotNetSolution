import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // route("about", "routes/about.tsx"),
    // route("contact", "routes/contact.tsx"),

    // index("../layouts/sidebar-layout/ExampleSidebarLayout.tsx"),
    route("layouts/sidebar", "../layouts/sidebar-layout/ExampleSidebarLayout.tsx"),

    // route("sidebar", "../layouts/sidebar-layout/ExampleSidebarLayout.tsx"),
    route("layouts/stacked", "../layouts/stacked-layout/ExampleStackedLayout.tsx"),
    route("auth/login", "../layouts/auth-layout/pages/LoginPage.tsx"),
    route("auth/register", "../layouts/auth-layout/pages/RegistrationPage.tsx"),
    route("auth/forgot-password", "../layouts/auth-layout/pages/ForgotPasswordPage.tsx"),

    route("components/alert", "../components/alert/ExampleAlert.tsx"),
    route("components/avatar", "../components/avatar/ExampleAvatar.tsx"),
    route("components/badge", "../components/badge/ExampleBadge.tsx"),
    // route("components/breadcrumb", "../components/breadcrumb/ExampleBreadcrumb.tsx"),
    route("components/button", "../components/button/ExampleButton.tsx"),
    route("components/checkbox", "../components/checkbox/ExampleCheckbox.tsx"),
    route("components/combobox", "../components/combobox/ExampleCombobox.tsx"),
    route("components/description-list", "../components/description-list/ExampleDescriptionList.tsx"),
    route("components/dialog", "../components/dialog/ExampleDialog.tsx"),
    route("components/divider", "../components/divider/ExampleDivider.tsx"),
    
    route("components/dropdown", "../components/dropdown/ExampleDropdown.tsx"), //done
    route("components/fieldset", "../components/fieldset/ExampleFieldset.tsx"), //done
    
    route("components/heading", "../components/heading/ExampleHeading.tsx"),
    route("components/input", "../components/input/ExampleInput.tsx"),
    route("components/listbox", "../components/listbox/ExampleListbox.tsx"),
    
    route("components/navbar", "../components/navbar/ExampleNavbar.tsx"), // todo

    route("components/pagination", "../components/pagination/ExamplePagination.tsx"),
    route("components/radio", "../components/radio/ExampleRadio.tsx"),
    route("components/select", "../components/select/ExampleSelect.tsx"),

    route("components/sidebar", "../components/sidebar/ExampleSidebar.tsx"), //done

    route("components/switch", "../components/switch/ExampleSwitch.tsx"),
    route("components/table", "../components/table/ExampleTable.tsx"),
    route("components/text", "../components/text/ExampleText.tsx"),
    route("components/textarea", "../components/textarea/ExampleTextarea.tsx"),
    // route("components/tabs", "../components/tabs/ExampleTabs.tsx"),
] satisfies RouteConfig;
