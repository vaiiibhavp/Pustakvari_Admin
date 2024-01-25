import glassmessage from "../Assets/Images/glassMessage.svg";
import userGlass from "../Assets/Images/glass_users.svg";
import rupees from "../Assets/Images/rupee.svg";
import bookframe from "../Assets/Images/booksFrame.svg";

// menusIcons
// import dashboardIcon from "../Assets/Images/price-list (1) 1 1.svg"

export const AppStrings = {
  welcome_message: "Hi, Welcome back",
  // Auth Pages
  term_and_conditon: "I agree to the terms and conditions",
  forgot_password: "Forgot Password?",
  dont_have_acc: "Don’t have an account?",
  already_have_acc: "Already have an account?",
  login_statement: "Please enter your email id  and password",
  forgot_statement: "No worries, we’ll send you reset instructions.",
  reset_statement: "Enter a new password below & we’ll log you in asap!",
  reset_title: "Set New Password ",
  Enter_OTP: "Enter OTP",
  otp_statement: "An 4 digit code has been sent to",
  send_OTP: "Send OTP",
  resend_otp: "Resend OTP",

  // Input Label
  email: "Email",
  email_Id: "Email Id",
  password: "Password",
  FullName: "Full Name",
  FirstName: "FirstName",
  confirmPassword: "Confirm Password",
  LastName: "LastName",
  address: "Address",
  contact_number: "Contact Number",
  contact_no: "Contact No",
  reset_password: "Reset Password",
  message: "Message",

  //  Input Placholders
  email_placeholder: "Enter your email address",
  FirstName_placeholder: "FirstName",
  LastName_placeholder: "LastName",
  password_placeholder: "New Password ",
  confirm_password_placeholder: "Confirm New Password",
  address_placeholder: "Enter your address",
  contact_number_placeholder: "Enter your contact number",
  FullName_placeholder: "Enter your FullName",
  gender_placeholder: "Select your gender",
  search_here: "Search here",

  // BtnInnerText
  login: "Login",
  register: "Register",
  done: "Done",
  create: "Create",
  cancel: "Cancel",
  deactivate: "Deactivate",
  Add_user: "Add User",
  submit: "Submit",
  update: "Update",
  successful: "Successful",
  pending: "Pending",
  created_notification: "Created Notification",
  all_notification: "All Notification",
  back: "Back",
  active: "Active",
  notification: "Notification",
  notification_title: "Notification Title",
  notification_Type: "Notification Type",
  user_type: "User Type",
  message_notifiaction: "Please enter message here....",

  // Dahbaord
  monthly_subscription: "Monthly Subscription",
  total_user: "Total Users",
  newly_e_books: "Newly Added E-books",
  total_institutes: "Total Institutes",
  subscription_buying_users: "Subscription Buying users",
  graph_users_overview: "Users Overview",
  Total: "Total",
  overviewLable_1: "Total Active Users",
  overviewLable_2: "Total Inactive Users",
  subscriptionLabel_1: "Monthly",
  subscriptionLabel_2: "Quaterly",
  subscriptionLabel_3: "Yearly",
  topCategoriesOverviewLabel_1: "Investment",
  topCategoriesOverviewLabel_2: "Comedy",
  topCategoriesOverviewLabel_3: "Travel",
  topCategoriesOverviewLabel_4: "Inspiration",
  topCategoriesOverviewLabel_5: "Horror",
  active_deactive_users: "Active Deactive users",
  top_categories_title: "Top 5 categories",
  top_categories_desc: "Users reading this categories books most",
  create_notification: "Create Notification",

  payment_tracking: "Payment Tracking",

  // Messages
  confirmation_deactive_user:
    "Are you sure do you want to deactivate the user?",

  notification_update_messge: "Notification has been added successfully!",

  // user page
  Add_new_user: "Add New User",
  user_added_message: "User has been added successfully!",
  profile_info_updation_message:
    "User information has been updated successfully!",

  // institutes page
  add_institute: "Add Institute",
  Institutes: "Institutes",
  add_new_institute: "Add new institute",
  Account_created_on: "Account Created on",
  institute_users: "Institute users",
  subscribed: "Subscribed",
  unsubscribed: "Unsubscribed",
  institute_name: "Institute Name",
  institute_edit_success: "Institute has been edited successfully!",
  edit_profile: "Edit institute",
  institute_Add: "Institute has been added successfully!",
  // e-book
  e_books: "E-books",
  all_e_books: "All E-books",
  Add_new_e_book: "Add new E-book",
  Categories: "Categories",
  add_category: "Add Category",
  e_book_added_success_message: "E-book has been edited successfully!",
  add_new_category: "Add new Category",
  category_name: "Category Name",
  category_added_success_message: "Category has been added successfully!",
  e_book_delete_confirmation_message:
    "Are you sure  you want to delete the E-book ?",
  book_image: "Book Image",
  Category: "Category",
  author_Name: "Author Name",
  book_name: "Book Name",
  Video: "Video",
  youtube_link: "Youtube Link",
  add_e_book: "Add E-book",
  all_categories: "All Categories",

  // subscription
  add_plans: "Add Plans",
  subscription: "Subscription",
  Add_new_subscription_plan: "Add new subscription plan",
  Subscription_Name: "Subscription Name",
  Edit_Subscription_title: "Edit subscription plan",

  delete_subscription_messgae:
    "Are you sure  you want to delete the subscription?",
  edit_subcription_message: "Subscription has been edited successfully!",
  added_subsription_message_success:
    "Subscription has been added successfully!",

  // Quiz
  Quiz: "Quiz",
  all_quize: "All Quiz",
  add_new_quize: "Add New Quiz",
  add_quize: "Add Quiz",
  quiz_name: "Quiz Name",
  add_question: "Add question",
  description: "Description",
  answer_key: "Answer key",
  delete_quize_confirm_message: "Are you sure do you want to delete this quiz?",
  added_quize_message: "Quiz has been added successfully!",

  // tables header

  sNo: "Sr. No",
  subscription_Name: "Subscription Name",
  Duration: "Duration",
  rate: "Rate",
  features: "Features",
  takeAction: "Take Actions",

  user_Name: " User Name",
  Contact: "Contact",
  institute_user: "Institute user",
  last_login: "Last Login",
  status: "Status",

  no_data_available: "No data available",
};

export const colorCodes = {
  PRIMARY_COLOR: "#FE6B01",
  PRIMARY_COLOR_100: "#FFF0E6",
  PRIMARY_COLOR_200: "#FFE9D9",
  PRIMARY_COLOR_300: "#FFD1B0",
  PRIMARY_COLOR_400: "#FE6B01",
  PRIMARY_COLOR_500: "#E56001",
  PRIMARY_COLOR_600: "#CB5601",
  PRIMARY_COLOR_700: "#FE6B01",
  PRIMARY_COLOR_800: "#984001",
  PRIMARY_COLOR_900: "#723000",

  SECONDARY_COLOR: "#480D9B",
  SECONDARY_COLOR_100: "#EDE7F5",
  SECONDARY_COLOR_200: "#C6B4E0",
  SECONDARY_COLOR_300: "#AB90D1",
  SECONDARY_COLOR_400: "#845DBC",
  SECONDARY_COLOR_500: "#6D3DAF",
  SECONDARY_COLOR_600: "#480D9B",
  SECONDARY_COLOR_700: "#420C8D",
  SECONDARY_COLOR_800: "#33096E",
  SECONDARY_COLOR_900: "#280755",

  GRAY_SHAD_100: "#B0B0B0",
  GRAY_SHAD_200: "#8A8A8A",
  GRAY_SHAD_300: "#545454",
  GRAY_SHAD_400: "#333333",
  GRAY_SHAD_500: "#000000",
};

export const adminMenus = [
  {
    id: 1,
    icon: "",
    title: "Dashboard",
    path: "/Dashboard",
  },
  {
    id: 2,
    icon: "",
    title: "User",
    path: "/User",
  },
  {
    id: 3,
    icon: "",
    title: "Payment Tracking",
    path: "/Payments",
  },
];

export const superAdminMenus = [
  {
    id: 1,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.95"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.3048 0.960936C19.758 0.953127 21.2111 0.960936 22.6641 0.984374C22.9502 1.12689 23.0517 1.35345 22.9688 1.66406C22.6407 2.97656 22.3126 4.28906 21.9844 5.60156C21.8183 5.97351 21.5448 6.07509 21.1641 5.90625C21.0181 5.79375 20.9556 5.6453 20.9766 5.46094C21.1571 4.64544 21.3369 3.83294 21.5157 3.02344C15.8391 7.8645 9.28441 10.8411 1.85163 11.9531C1.22642 12.1305 0.937357 11.904 0.984438 11.2734C1.03702 11.1739 1.10733 11.088 1.19538 11.0156C8.73517 9.96328 15.3602 6.96328 21.0704 2.01562C20.1485 2 19.2266 1.98437 18.3048 1.96875C18.0608 1.89506 17.9515 1.73099 17.9766 1.47656C17.9571 1.21811 18.0664 1.04623 18.3048 0.960936Z"
          fill="#FE6B01"
        />
        <path
          opacity="0.969"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3357 7.94532C18.1013 7.93749 19.867 7.94532 21.6325 7.96876C21.8122 8.02346 21.9294 8.14065 21.9841 8.32032C22.0075 12.8671 22.0154 17.414 22.0075 21.9609C22.2269 21.9532 22.4456 21.961 22.6638 21.9844C22.9499 22.1269 23.0514 22.3535 22.9685 22.6641C22.8982 22.7969 22.7966 22.8984 22.6638 22.9688C15.5388 23 8.41378 23 1.28878 22.9688C0.964701 22.792 0.878765 22.5342 1.03096 22.1953C1.10329 22.1073 1.18922 22.037 1.28878 21.9844C1.50697 21.961 1.72572 21.9532 1.94503 21.9609C1.93721 19.414 1.94503 16.8671 1.96846 14.3203C2.02315 14.1406 2.14034 14.0235 2.32003 13.9688C4.08565 13.9375 5.85126 13.9375 7.6169 13.9688C7.77801 14.0206 7.8952 14.1221 7.96846 14.2734C7.9919 16.8359 7.99973 19.3984 7.9919 21.9609C8.32003 21.9609 8.64815 21.9609 8.97628 21.9609C8.96845 18.3828 8.97628 14.8047 8.99971 11.2266C9.09163 11.1031 9.20882 11.0171 9.35128 10.9688C11.1013 10.9375 12.8513 10.9375 14.6013 10.9688C14.7437 11.0171 14.8609 11.1031 14.9528 11.2266C14.9763 14.8047 14.9841 18.3828 14.9763 21.9609C15.3044 21.9609 15.6325 21.9609 15.9607 21.9609C15.9528 17.3984 15.9607 12.8359 15.9841 8.27344C16.0657 8.12129 16.1829 8.01193 16.3357 7.94532ZM16.9919 8.97657C18.32 8.97657 19.6482 8.97657 20.9763 8.97657C20.9763 13.3047 20.9763 17.6328 20.9763 21.9609C19.6482 21.9609 18.32 21.9609 16.9919 21.9609C16.9919 17.6328 16.9919 13.3047 16.9919 8.97657ZM10.0075 11.9766C11.32 11.9766 12.6325 11.9766 13.945 11.9766C13.945 15.3047 13.945 18.6328 13.945 21.9609C12.6325 21.9609 11.32 21.9609 10.0075 21.9609C10.0075 18.6328 10.0075 15.3047 10.0075 11.9766ZM2.97628 14.9766C4.3044 14.9766 5.63254 14.9766 6.96065 14.9766C6.96065 17.3047 6.96065 19.6328 6.96065 21.9609C5.63254 21.9609 4.3044 21.9609 2.97628 21.9609C2.97628 19.6328 2.97628 17.3047 2.97628 14.9766Z"
          fill="#FE6B01"
        />
      </svg>
    ),
    title: "Dashboard",
    path: "/Dashboard",
  },
  {
    id: 2,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.964"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3206 2.22625C13.6981 2.05888 15.3934 3.04326 16.4065 5.17937C17.115 7.2595 16.6853 9.06419 15.1175 10.5934C13.4501 11.8918 11.6532 12.0949 9.72685 11.2028C7.75046 9.99166 6.94576 8.23384 7.31279 5.92937C7.89418 3.8712 9.23012 2.63682 11.3206 2.22625ZM11.93 3.72625C13.626 3.83633 14.6963 4.71133 15.1409 6.35125C15.3516 8.04737 14.6875 9.2583 13.1487 9.98406C11.6371 10.4696 10.3793 10.1024 9.37529 8.8825C8.50909 7.54919 8.54035 6.23669 9.46904 4.945C10.1224 4.19251 10.9427 3.78626 11.93 3.72625Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.975"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.55465 13.1953C10.836 13.1875 13.1172 13.1953 15.3984 13.2188C17.7981 13.4781 19.4621 14.7203 20.3906 16.9453C20.7176 17.8125 20.8114 18.7031 20.6718 19.6172C20.3739 20.7588 19.6474 21.4541 18.4921 21.7031C14.1484 21.7344 9.80466 21.7344 5.4609 21.7031C4.2294 21.4247 3.48722 20.667 3.23434 19.4297C3.15529 16.7917 4.28811 14.8776 6.63277 13.6875C7.25513 13.4265 7.89573 13.2624 8.55465 13.1953ZM8.6484 14.7422C10.8672 14.7344 13.086 14.7422 15.3046 14.7656C17.3275 15.054 18.6009 16.1868 19.125 18.1641C19.2111 18.5719 19.2111 18.9781 19.125 19.3828C18.9128 19.8915 18.53 20.1649 17.9765 20.2031C13.9765 20.2344 9.97651 20.2344 5.97652 20.2031C5.36616 20.1443 4.96773 19.824 4.78121 19.2422C4.74465 17.2602 5.62744 15.8617 7.42965 15.0469C7.83118 14.8997 8.23744 14.7981 8.6484 14.7422Z"
          fill="#8A8A8A"
        />
      </svg>
    ),
    title: "User",
    path: "/User",
  },
  {
    id: 3,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.985"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7891 2.83587C11.915 2.82818 12.04 2.83599 12.1641 2.85931C13.4766 3.51556 14.7891 4.17181 16.1016 4.82806C16.2138 4.91956 16.2841 5.03674 16.3125 5.17962C16.3359 5.67935 16.3438 6.17937 16.3359 6.67962C17.8204 6.67179 19.3048 6.67962 20.7891 6.70306C20.9531 6.7421 21.0547 6.84368 21.0938 7.00774C21.1172 11.3827 21.125 15.7577 21.1172 20.1327C21.3365 20.125 21.5552 20.1328 21.7734 20.1562C22.1423 20.421 22.1735 20.7179 21.8672 21.0468C21.8203 21.0624 21.7734 21.0781 21.7266 21.0937C15.2265 21.1249 8.72658 21.1249 2.22656 21.0937C2.0017 21.0197 1.87671 20.8634 1.85156 20.6249C1.86738 20.4056 1.97675 20.2493 2.17969 20.1562C2.39788 20.1328 2.61663 20.125 2.83594 20.1327C2.82812 15.7577 2.83594 11.3827 2.85938 7.00774C2.89844 6.84368 3 6.7421 3.16406 6.70306C4.64835 6.67962 6.13275 6.67179 7.61719 6.67962C7.60936 6.17937 7.61719 5.67935 7.64062 5.17962C7.66903 5.03674 7.73934 4.91956 7.85156 4.82806C9.17423 4.17457 10.4867 3.5105 11.7891 2.83587ZM11.9297 3.91399C13.0438 4.44761 14.1532 4.99446 15.2578 5.55462C15.3047 10.4139 15.3203 15.2733 15.3047 20.1327C14.6797 20.1327 14.0547 20.1327 13.4297 20.1327C13.4375 19.2576 13.4297 18.3826 13.4062 17.5077C13.3515 17.3906 13.2656 17.3046 13.1484 17.2499C12.3672 17.2187 11.586 17.2187 10.8047 17.2499C10.721 17.2867 10.6507 17.3414 10.5938 17.414C10.5246 18.3159 10.5012 19.2222 10.5234 20.1327C9.89845 20.1327 9.27342 20.1327 8.64844 20.1327C8.63283 15.2733 8.64844 10.4139 8.69531 5.55462C9.78361 5.01832 10.8617 4.47144 11.9297 3.91399ZM11.8359 6.72649C12.3553 6.75251 12.5193 7.00249 12.3281 7.47649C11.9174 7.73885 11.6439 7.63732 11.5078 7.17181C11.556 6.97559 11.6654 6.82714 11.8359 6.72649ZM3.82031 7.66399C5.08594 7.66399 6.35156 7.66399 7.61719 7.66399C7.61719 11.8203 7.61719 15.9765 7.61719 20.1327C6.35156 20.1327 5.08594 20.1327 3.82031 20.1327C3.82031 15.9765 3.82031 11.8203 3.82031 7.66399ZM16.3359 7.66399C17.6016 7.66399 18.8672 7.66399 20.1328 7.66399C20.1328 11.8203 20.1328 15.9765 20.1328 20.1327C18.8672 20.1327 17.6016 20.1327 16.3359 20.1327C16.3359 15.9765 16.3359 11.8203 16.3359 7.66399ZM11.5078 18.2109C11.8203 18.2109 12.1328 18.2109 12.4453 18.2109C12.4453 18.8515 12.4453 19.4921 12.4453 20.1327C12.1328 20.1327 11.8203 20.1327 11.5078 20.1327C11.5078 19.4921 11.5078 18.8515 11.5078 18.2109Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.981"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8362 5.69531C12.9728 5.77725 13.4962 6.38662 13.4065 7.52344C13.0923 8.40328 12.4751 8.75484 11.5549 8.57812C10.6815 8.2297 10.3612 7.59689 10.594 6.67969C10.8258 6.111 11.2399 5.78288 11.8362 5.69531ZM11.8362 6.72656C11.6657 6.8272 11.5563 6.97566 11.5081 7.17188C11.6442 7.63739 11.9176 7.73892 12.3284 7.47656C12.5196 7.00256 12.3555 6.75258 11.8362 6.72656Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.98"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.0859 8.60155C5.52367 8.59377 5.9612 8.60155 6.3984 8.62499C6.69831 8.79031 6.78423 9.03247 6.65622 9.35155C6.5987 9.45589 6.51273 9.52621 6.3984 9.56249C5.94526 9.59375 5.49217 9.59375 5.03903 9.56249C4.73739 9.34278 4.68269 9.06931 4.87497 8.74217C4.9524 8.70003 5.02272 8.65316 5.0859 8.60155Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.976"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5549 8.60155C17.9926 8.59377 18.4302 8.60155 18.8674 8.62499C19.2128 8.82069 19.2831 9.09411 19.0783 9.4453C19.036 9.5016 18.9813 9.54069 18.9142 9.56249C18.4611 9.59375 18.008 9.59375 17.5549 9.56249C17.1197 9.24467 17.1197 8.92438 17.5549 8.60155Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.982"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.0859 10.5234C5.52367 10.5156 5.9612 10.5234 6.3984 10.5469C6.69831 10.7122 6.78423 10.9543 6.65622 11.2734C6.5987 11.3778 6.51273 11.4481 6.3984 11.4844C5.94526 11.5156 5.49217 11.5156 5.03903 11.4844C4.73739 11.2647 4.68269 10.9912 4.87497 10.664C4.9524 10.6219 5.02272 10.575 5.0859 10.5234Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.98"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5543 10.5234C17.9921 10.5156 18.4296 10.5234 18.8668 10.5469C19.2123 10.7426 19.2826 11.016 19.0778 11.3672C19.019 11.4005 18.9643 11.4395 18.9137 11.4844C18.4606 11.5156 18.0075 11.5156 17.5543 11.4844C17.1199 11.1643 17.1199 10.844 17.5543 10.5234Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.946"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.91446 11.4608C10.3713 11.4412 10.8245 11.4646 11.2738 11.5312C11.5863 11.828 11.5863 12.1249 11.2738 12.4218C10.7895 12.5155 10.3051 12.5155 9.82071 12.4218C9.53355 12.216 9.47889 11.9581 9.65664 11.6483C9.74158 11.5791 9.8275 11.5166 9.91446 11.4608Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.947"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8205 11.4609C13.2115 11.4531 13.6021 11.4609 13.9924 11.4844C14.2577 11.5389 14.3983 11.703 14.4143 11.9765C14.3983 12.2501 14.2577 12.4142 13.9924 12.4687C13.5513 12.5117 13.1139 12.4961 12.6799 12.4219C12.4652 12.2607 12.3948 12.0498 12.469 11.789C12.5518 11.6357 12.669 11.5263 12.8205 11.4609Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.983"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03915 12.4453C5.49253 12.4375 5.94567 12.4453 6.39853 12.4687C6.69782 12.632 6.78375 12.8743 6.65634 13.1953C6.58401 13.2833 6.49809 13.3536 6.39853 13.4062C5.96104 13.4375 5.52351 13.4375 5.08603 13.4062C4.74061 13.2105 4.67028 12.9371 4.87509 12.5859C4.92876 12.5327 4.98346 12.4858 5.03915 12.4453Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.981"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5548 12.4453C18.0082 12.4375 18.4613 12.4453 18.9142 12.4687C19.2158 12.6884 19.2705 12.9619 19.0782 13.289C19.0117 13.334 18.9414 13.3731 18.8673 13.4062C18.4298 13.4375 17.9923 13.4375 17.5548 13.4062C17.1211 13.0838 17.1211 12.7635 17.5548 12.4453Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.967"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.91446 13.3827C10.3713 13.363 10.8245 13.3865 11.2738 13.453C11.5863 13.7499 11.5863 14.0468 11.2738 14.3437C10.7895 14.4374 10.3051 14.4374 9.82071 14.3437C9.53355 14.1378 9.47889 13.88 9.65664 13.5702C9.74158 13.501 9.8275 13.4385 9.91446 13.3827Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.965"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8205 13.3828C13.2271 13.375 13.6333 13.3828 14.0393 13.4062C14.398 13.592 14.484 13.8654 14.2971 14.2265C14.2127 14.3117 14.1112 14.3664 13.9924 14.3906C13.5513 14.4336 13.1139 14.418 12.6799 14.3437C12.4652 14.1826 12.3948 13.9716 12.469 13.7109C12.5518 13.5575 12.669 13.4482 12.8205 13.3828Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.976"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03915 14.3672C5.49253 14.3594 5.94567 14.3672 6.39853 14.3906C6.71536 14.5482 6.80128 14.7904 6.65634 15.1172C6.58401 15.2052 6.49809 15.2755 6.39853 15.3281C5.96104 15.3594 5.52351 15.3594 5.08603 15.3281C4.74061 15.1324 4.67028 14.859 4.87509 14.5078C4.92876 14.4545 4.98346 14.4077 5.03915 14.3672Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.978"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5545 14.3672C18.0078 14.3594 18.461 14.3672 18.9138 14.3906C19.2155 14.6103 19.2702 14.8838 19.0779 15.2109C19.0114 15.2559 18.9411 15.295 18.867 15.3281C18.4295 15.3594 17.9919 15.3594 17.5545 15.3281C17.1186 15.0038 17.1186 14.6835 17.5545 14.3672Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.986"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.91446 15.3046C10.3713 15.2849 10.8245 15.3083 11.2738 15.3749C11.5863 15.6718 11.5863 15.9687 11.2738 16.2655C10.7888 16.358 10.3045 16.358 9.82071 16.2655C9.53355 16.0597 9.47889 15.8019 9.65664 15.4921C9.74158 15.4229 9.8275 15.3604 9.91446 15.3046Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.978"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8205 15.3047C13.2271 15.2969 13.6333 15.3047 14.0393 15.3281C14.398 15.5139 14.484 15.7873 14.2971 16.1484C14.2127 16.2336 14.1112 16.2883 13.9924 16.3125C13.552 16.354 13.1145 16.3384 12.6799 16.2656C12.4652 16.1045 12.3948 15.8935 12.469 15.6328C12.5518 15.4794 12.669 15.3701 12.8205 15.3047Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.977"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03915 16.289C5.50818 16.2813 5.97693 16.289 6.4454 16.3125C6.82762 16.6444 6.81201 16.9569 6.39853 17.25C5.96104 17.2813 5.52351 17.2813 5.08603 17.25C4.74061 17.0543 4.67028 16.7809 4.87509 16.4297C4.92876 16.3764 4.98346 16.3295 5.03915 16.289Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.983"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5081 16.289C17.9771 16.2813 18.4459 16.289 18.9143 16.3125C19.216 16.5322 19.2707 16.8057 19.0784 17.1328C19.0119 17.1778 18.9416 17.2168 18.8675 17.25C18.43 17.2813 17.9924 17.2813 17.555 17.25C17.2176 17.0471 17.1473 16.7736 17.344 16.4297C17.4152 16.3986 17.4699 16.3517 17.5081 16.289Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.967"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.03901 18.2109C5.50804 18.2031 5.97679 18.2109 6.44526 18.2344C6.72149 18.4135 6.7918 18.6557 6.65619 18.9609C6.58387 19.049 6.49794 19.1193 6.39838 19.1719C5.9609 19.2031 5.52337 19.2031 5.08588 19.1719C4.76146 19.0009 4.67551 18.743 4.82807 18.3984C4.89355 18.3248 4.96387 18.2623 5.03901 18.2109Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.965"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5081 18.2109C17.9771 18.2031 18.4459 18.2109 18.9143 18.2344C19.216 18.4541 19.2707 18.7275 19.0784 19.0547C19.0119 19.0997 18.9416 19.1387 18.8675 19.1719C18.43 19.2031 17.9924 19.2031 17.555 19.1719C17.2176 18.969 17.1473 18.6955 17.344 18.3515C17.4152 18.3205 17.4699 18.2736 17.5081 18.2109Z"
          fill="#8A8A8A"
        />
      </svg>
    ),
    title: "Institute",
    path: "/Institute",
  },
  {
    id: 4,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.994"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.50781 1.47656C9.82036 1.46875 14.1329 1.47656 18.4453 1.5C19.375 1.74219 19.9609 2.32813 20.2031 3.25781C20.2344 9.07031 20.2344 14.8828 20.2031 20.6953C19.9609 21.625 19.375 22.2109 18.4453 22.4531C14.2422 22.4844 10.0391 22.4844 5.83594 22.4531C4.71877 22.1797 4.02344 21.4844 3.75 20.3672C3.71875 14.664 3.71875 8.96095 3.75 3.25781C4.00073 2.32743 4.58666 1.73368 5.50781 1.47656ZM5.97656 2.97656C9.97659 2.96875 13.9766 2.97656 17.9766 3C18.4063 3.05469 18.6484 3.29687 18.7031 3.72656C18.7344 7.97658 18.7344 12.2265 18.7031 16.4766C18.6484 16.9063 18.4063 17.1484 17.9766 17.2031C13.9453 17.2187 9.91406 17.2344 5.88281 17.25C5.65852 17.2831 5.44758 17.3534 5.25 17.4609C5.21874 12.8828 5.21874 8.3047 5.25 3.72656C5.31309 3.29636 5.5553 3.04636 5.97656 2.97656ZM18.6328 18.6328C18.6951 18.8809 18.7264 19.1465 18.7266 19.4297C18.7298 19.7759 18.7063 20.1196 18.6563 20.4609C18.5343 20.7681 18.3078 20.9322 17.9766 20.9531C14.1015 20.9844 10.2266 20.9844 6.35156 20.9531C5.53336 20.8223 5.1818 20.3457 5.29688 19.5234C5.48972 19.0493 5.84128 18.7915 6.35156 18.75C10.3828 18.7344 14.4141 18.7187 18.4453 18.7031C18.5183 18.6933 18.5808 18.6698 18.6328 18.6328Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.963"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.88249 5.46094C10.945 5.45312 13.0075 5.46094 15.07 5.48438C15.548 5.74655 15.6808 6.12938 15.4684 6.63282C15.3313 6.84821 15.136 6.9654 14.8825 6.98438C12.945 7.01565 11.0075 7.01565 9.06999 6.98438C8.40071 6.78437 8.22099 6.37032 8.53093 5.74219C8.63002 5.61933 8.74721 5.52558 8.88249 5.46094Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.962"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.97656 8.64844C10.8985 8.64062 12.8204 8.64844 14.7422 8.67188C15.21 8.84954 15.3897 9.18544 15.2812 9.67969C15.1755 9.92612 14.9958 10.0902 14.7422 10.1719C12.8047 10.2031 10.8672 10.2031 8.92969 10.1719C8.57241 10.0517 8.38491 9.80166 8.36719 9.42188C8.40984 9.02949 8.61295 8.77168 8.97656 8.64844Z"
          fill="#8A8A8A"
        />
      </svg>
    ),
    title: "E-Books",
    path: "/E-books",
  },
  {
    id: 5,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.956"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.52344 2.13306C10.6496 2.11093 13.7746 2.13437 16.8984 2.20337C17.5 2.38298 17.8516 2.78142 17.9531 3.39869C17.9766 3.789 17.9843 4.17962 17.9766 4.57056C19.4923 4.56275 21.0079 4.57056 22.5234 4.594C23.0638 4.6813 23.4154 4.98597 23.5781 5.50806C23.6094 9.82056 23.6094 14.1331 23.5781 18.4456C23.4154 18.9677 23.0638 19.2723 22.5234 19.3596C21.0079 19.3831 19.4923 19.3909 17.9766 19.3831C17.9843 19.774 17.9766 20.1646 17.9531 20.5549C17.7848 21.3228 17.3082 21.7369 16.5234 21.7971C13.5234 21.8284 10.5234 21.8284 7.52344 21.7971C6.72891 21.7168 6.25233 21.2871 6.09375 20.5081C6.07031 20.1334 6.06253 19.7584 6.07031 19.3831C4.52336 19.3909 2.97648 19.3831 1.42969 19.3596C0.889289 19.2723 0.537727 18.9677 0.375 18.4456C0.34375 14.1331 0.34375 9.82056 0.375 5.50806C0.537727 4.98597 0.889289 4.6813 1.42969 4.594C2.97648 4.57056 4.52336 4.56275 6.07031 4.57056C6.06253 4.19524 6.07031 3.82024 6.09375 3.44556C6.19927 2.81941 6.55083 2.40535 7.14844 2.20337C7.28273 2.1948 7.4077 2.17136 7.52344 2.13306ZM7.47656 3.25806C10.5079 3.25025 13.5391 3.25806 16.5703 3.2815C16.654 3.31827 16.7243 3.37296 16.7812 3.44556C16.8592 9.09803 16.8748 14.7543 16.8281 20.4143C16.7913 20.498 16.7367 20.5683 16.6641 20.6252C13.6054 20.703 10.5429 20.7187 7.47656 20.6721C7.39284 20.6353 7.32253 20.5807 7.26562 20.5081C7.18767 14.8556 7.17206 9.19933 7.21875 3.53931C7.2825 3.42106 7.36842 3.32731 7.47656 3.25806ZM1.52344 5.69556C3.03906 5.69556 4.55469 5.69556 6.07031 5.69556C6.07031 6.75808 6.07031 7.82054 6.07031 8.88306C5.10155 8.88306 4.13281 8.88306 3.16406 8.88306C3.16406 9.25806 3.16406 9.63306 3.16406 10.0081C4.13281 10.0081 5.10155 10.0081 6.07031 10.0081C6.07031 11.1955 6.07031 12.3831 6.07031 13.5706C5.50758 13.5627 4.94508 13.5706 4.38281 13.594C3.47195 13.876 3.07351 14.4932 3.1875 15.4456C3.36677 16.1717 3.82771 16.5857 4.57031 16.6877C5.07005 16.7112 5.57006 16.719 6.07031 16.7112C6.07031 17.2268 6.07031 17.7424 6.07031 18.2581C4.54344 18.2735 3.02 18.2579 1.5 18.2112C1.46108 14.036 1.46888 9.86415 1.52344 5.69556ZM17.9766 5.69556C19.4722 5.68014 20.9644 5.69575 22.4531 5.74244C22.4844 9.8987 22.4844 14.0549 22.4531 18.2112C20.9644 18.2579 19.4722 18.2735 17.9766 18.2581C17.9766 17.7424 17.9766 17.2268 17.9766 16.7112C18.4456 16.719 18.9143 16.7112 19.3828 16.6877C20.4211 16.479 20.8821 15.8462 20.7656 14.7893C20.6172 14.1409 20.2187 13.7425 19.5703 13.594C19.0393 13.5706 18.508 13.5627 17.9766 13.5706C17.9766 12.3831 17.9766 11.1955 17.9766 10.0081C18.8985 10.0081 19.8203 10.0081 20.7422 10.0081C20.7422 9.63306 20.7422 9.25806 20.7422 8.88306C19.8203 8.88306 18.8985 8.88306 17.9766 8.88306C17.9766 7.82054 17.9766 6.75808 17.9766 5.69556ZM4.57031 14.6956C5.07033 14.6956 5.5703 14.6956 6.07031 14.6956C6.07031 14.9924 6.07031 15.2893 6.07031 15.5862C5.58567 15.594 5.10131 15.5862 4.61719 15.5627C4.3513 15.4531 4.24974 15.2577 4.3125 14.9768C4.37624 14.8585 4.46217 14.7648 4.57031 14.6956ZM17.9766 14.6956C18.4612 14.6878 18.9456 14.6956 19.4297 14.719C19.672 14.8976 19.7266 15.1241 19.5938 15.3987C19.5197 15.4709 19.4338 15.5256 19.3359 15.5627C18.8831 15.5862 18.4299 15.594 17.9766 15.5862C17.9766 15.2893 17.9766 14.9924 17.9766 14.6956Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.946"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.46094 7.28906C10.8672 7.28906 13.2735 7.28906 15.6797 7.28906C15.6797 7.66406 15.6797 8.03906 15.6797 8.41406C13.2735 8.41406 10.8672 8.41406 8.46094 8.41406C8.46094 8.03906 8.46094 7.66406 8.46094 7.28906Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.938"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.1484 10.8516C11.3828 10.8516 12.6172 10.8516 13.8516 10.8516C13.8516 11.2266 13.8516 11.6016 13.8516 11.9766C12.6172 11.9766 11.3828 11.9766 10.1484 11.9766C10.1484 11.6016 10.1484 11.2266 10.1484 10.8516Z"
          fill="#8A8A8A"
        />
        <path
          opacity="0.951"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.2895 14.9766C11.3678 14.9687 12.4459 14.9766 13.5239 15C14.6454 15.2156 15.1688 15.8953 15.0942 17.0391C14.9302 17.8281 14.4536 18.3047 13.6645 18.4688C12.4927 18.5 11.3208 18.5 10.1489 18.4688C9.04261 18.155 8.58165 17.4285 8.7661 16.2891C9.0098 15.5371 9.51765 15.0996 10.2895 14.9766ZM10.3364 16.1016C10.1796 16.1534 10.0468 16.2471 9.93797 16.3828C9.73894 16.8168 9.85613 17.1371 10.2895 17.3438C11.3677 17.375 12.4458 17.375 13.5239 17.3438C13.6364 17.3095 13.7379 17.2548 13.8286 17.1797C14.1201 16.6923 14.0029 16.3408 13.477 16.125C12.4303 16.1016 11.3834 16.0937 10.3364 16.1016Z"
          fill="#8A8A8A"
        />
      </svg>
    ),
    title: "Subscription",
    path: "/Subscription",
  },
  {
    id: 6,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_409_11179)">
          <path
            opacity="0.968"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1325 -0.0234375C11.695 -0.0234375 12.2575 -0.0234375 12.82 -0.0234375C15.8128 0.40662 17.93 2.00037 19.1715 4.75781C20.1616 7.43667 19.8491 9.95227 18.234 12.3047C17.6697 12.9158 17.1228 13.5408 16.5934 14.1797C15.8873 15.1909 15.5279 16.3159 15.5153 17.5547C15.4997 18.711 15.484 19.8672 15.4684 21.0234C15.2406 22.2837 14.5453 23.1821 13.3825 23.7188C13.0998 23.8204 12.8185 23.9063 12.5387 23.9766C12.1637 23.9766 11.7887 23.9766 11.4137 23.9766C9.84148 23.6153 8.86494 22.6465 8.48403 21.0703C8.47775 19.6633 8.44653 18.257 8.39028 16.8516C8.23419 15.7104 7.7967 14.6948 7.07778 13.8047C4.35419 11.2895 3.58856 8.27391 4.7809 4.75781C6.02244 2.00037 8.13964 0.40662 11.1325 -0.0234375ZM11.9293 1.38281C14.6309 1.5022 16.5762 2.76782 17.7653 5.17969C18.6134 7.35975 18.3947 9.42225 17.109 11.3672C16.6576 11.8968 16.1888 12.4125 15.7028 12.9141C14.804 14.056 14.265 15.3529 14.0856 16.8047C12.6793 16.8672 11.2731 16.8672 9.86684 16.8047C9.60434 14.7861 8.70589 13.1142 7.17153 11.7891C5.59348 9.77419 5.26536 7.57106 6.18715 5.17969C7.35973 2.79669 9.27383 1.53107 11.9293 1.38281ZM9.86684 18.2578C11.2731 18.2578 12.6793 18.2578 14.0856 18.2578C14.0934 18.9923 14.0856 19.7267 14.0622 20.4609C13.9857 21.4346 13.4935 22.0987 12.5856 22.4531C11.4099 22.6973 10.5583 22.2832 10.0309 21.2109C9.94662 20.9682 9.89975 20.7182 9.89028 20.4609C9.86684 19.7267 9.85901 18.9923 9.86684 18.2578Z"
            fill="#8A8A8A"
          />
          <path
            opacity="0.916"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.66406 2.03906C2.41069 2.7075 3.12944 3.41062 3.82031 4.14844C3.49219 4.50781 3.14844 4.85156 2.78906 5.17969C2.07031 4.49219 1.36719 3.78906 0.679688 3.07031C1.00882 2.7256 1.33695 2.38185 1.66406 2.03906Z"
            fill="#8A8A8A"
          />
          <path
            opacity="0.915"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.1953 2.03906C22.5824 2.34791 22.9418 2.69166 23.2734 3.07031C22.5859 3.78906 21.8828 4.49219 21.1641 5.17969C20.8047 4.85156 20.4609 4.50781 20.1328 4.14844C20.8213 3.44434 21.5088 2.74121 22.1953 2.03906Z"
            fill="#8A8A8A"
          />
          <path
            opacity="0.968"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5083 4.19578C12.6001 4.05025 13.4048 4.45651 13.9223 5.41453C14.2168 6.21651 14.1231 6.96651 13.6411 7.66453C13.4313 7.87856 13.2125 8.08167 12.9848 8.2739C12.9105 8.37562 12.848 8.48503 12.7973 8.60203C12.7034 9.00225 12.6644 9.40851 12.6801 9.82078C12.2114 9.82078 11.7426 9.82078 11.2739 9.82078C11.0793 8.53617 11.4933 7.50492 12.5161 6.72703C12.7257 6.32578 12.6554 5.98982 12.3051 5.71921C11.8726 5.54128 11.5523 5.65846 11.3442 6.07078C11.2845 6.38029 11.261 6.69281 11.2739 7.00828C10.8051 7.00828 10.3364 7.00828 9.86764 7.00828C9.64766 5.60245 10.1945 4.66495 11.5083 4.19578Z"
            fill="#8A8A8A"
          />
          <path
            opacity="0.985"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-0.0234375 7.00781C0.945314 7.00781 1.91406 7.00781 2.88281 7.00781C2.88281 7.47656 2.88281 7.94531 2.88281 8.41406C1.91406 8.41406 0.945314 8.41406 -0.0234375 8.41406C-0.0234375 7.94531 -0.0234375 7.47656 -0.0234375 7.00781Z"
            fill="#8A8A8A"
          />
          <path
            opacity="0.985"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.9766 7.00781C23.9766 7.47656 23.9766 7.94531 23.9766 8.41406C23.0078 8.41406 22.0391 8.41406 21.0703 8.41406C21.0703 7.94531 21.0703 7.47656 21.0703 7.00781C22.0391 7.00781 23.0078 7.00781 23.9766 7.00781Z"
            fill="#8A8A8A"
          />
          <path
            opacity="0.925"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.74219 10.2422C3.12929 10.551 3.48866 10.8948 3.82031 11.2734C3.15691 11.9603 2.48504 12.64 1.80469 13.3125C1.75781 13.3438 1.71094 13.3438 1.66406 13.3125C1.35938 13.0078 1.05469 12.7031 0.750001 12.3984C0.71875 12.3516 0.71875 12.3047 0.750001 12.2578C1.42352 11.5921 2.08759 10.9202 2.74219 10.2422Z"
            fill="#8A8A8A"
          />
          <path
            opacity="0.925"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.1172 10.2422C21.8319 10.8865 22.5272 11.5583 23.2031 12.2578C23.2344 12.3047 23.2344 12.3516 23.2031 12.3984C22.8984 12.7031 22.5938 13.0078 22.2891 13.3125C22.2422 13.3438 22.1953 13.3438 22.1484 13.3125C21.4681 12.64 20.7962 11.9603 20.1328 11.2734C20.4619 10.9287 20.79 10.585 21.1172 10.2422Z"
            fill="#8A8A8A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2734 11.2266C11.7422 11.2266 12.2109 11.2266 12.6797 11.2266C12.6797 11.6953 12.6797 12.1641 12.6797 12.6328C12.2109 12.6328 11.7422 12.6328 11.2734 12.6328C11.2734 12.1641 11.2734 11.6953 11.2734 11.2266Z"
            fill="#8A8A8A"
          />
        </g>
        <defs>
          <clipPath id="clip0_409_11179">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Quiz",
    path: "/Quiz",
  },
];

export const dashboardWidgetData = [
  {
    id: 1,
    title: AppStrings.monthly_subscription,
    total: 714,
    img: rupees,
  },
  {
    id: 2,
    title: AppStrings.total_user,
    total: 111,
    img: userGlass,
  },
  {
    id: 3,
    title: AppStrings.newly_e_books,
    total: 121,
    img: bookframe,
  },
  {
    id: 4,
    title: AppStrings.total_institutes,
    total: 11,
    img: glassmessage,
  },
];
