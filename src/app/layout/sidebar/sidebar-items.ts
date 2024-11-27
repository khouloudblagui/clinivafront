import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },

  // Admin Modules
  {
    path: '',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/dashboard/main',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD1',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/dashboard2',
        title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD2',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/doctor-dashboard',
        title: 'MENUITEMS.DASHBOARD.LIST.DOCTOR-DASHBOARD',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/dashboard/patient-dashboard',
        title: 'MENUITEMS.DASHBOARD.LIST.PATIENT-DASHBOARD',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'MENUITEMS.APPOINTMENTS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'assignment',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/appointment/viewAppointment',
        title: 'MENUITEMS.APPOINTMENTS.LIST.VIEW-APPOINTMENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/appointment/bookAppointment',
        title: 'MENUITEMS.APPOINTMENTS.LIST.BOOK-APPOINTMENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/appointment/edit-ppointment',
        title: 'MENUITEMS.APPOINTMENTS.LIST.EDIT-APPOINTMENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'MENUITEMS.DOCTORS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'supervised_user_circle',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/doctors/allDoctors',
        title: 'MENUITEMS.DOCTORS.LIST.ALL-DOCTOR',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/doctors/add-doctor',
        title: 'MENUITEMS.DOCTORS.LIST.ADD-DOCTOR',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/doctors/edit-doctor',
        title: 'MENUITEMS.DOCTORS.LIST.EDIT-DOCTOR',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/doctors/doctor-profile',
        title: 'MENUITEMS.DOCTORS.LIST.PROFILE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Medications',
    iconType: 'material-icons-two-tone',
    icon: 'people_alt',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/medication/all-medication',
        title: 'All Medications',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/medication/add-medication',
        title: 'Add Medication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/medication/upload-medication',
        title: 'Upload Medication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },

  // Ajout de l'élément "allergy" avec ses sous-éléments
  {
    path: '',
    title: 'Allergy',
    iconType: 'material-icons-two-tone',
    icon: 'pest_control',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/allergy/allergylist',
        title: 'Allergy List',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Vaccination',
    iconType: 'material-icons-two-tone',
    icon: 'medical_services',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/vaccination/vaccination-list',
        title: 'Vaccination List',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/vaccination/adverseEffect-list',
        title: 'Adverse Effect List',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }
    ],
  },
  {
    path: '',
    title: 'Bioligical Analysis',
    iconType: 'material-icons-two-tone',
    icon: 'science',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/bioanalysis/bioanalysis-list',
        title: 'Bioligcal Analysis List',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }
    ],
  },
   // Ajout de l'élément "physical treatment" avec ses sous-éléments
{
  path: '',
  title: 'Physical Treatment',
  iconType: 'material-icons-two-tone',
  icon: 'directions_run',
  class: 'menu-toggle',
  groupTitle: false,
  badge: '',
  badgeClass: '',
  role: ['Admin'],
  submenu: [
    {
      path: '/admin/physical-treatment/list',
      title: 'Treatment List',
      iconType: '',
      icon: '',
      class: 'ml-menu',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: [''],
      submenu: [],
    },
    {
      path: '/admin/physical-treatment/category',
      title: 'Treatment Categories',
      iconType: '',
      icon: '',
      class: 'ml-menu',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: [''],
      submenu: [],
    },
  ]
},



  {
    path: '',
    title: 'MENUITEMS.PATIENTS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'face',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/patients/all-patients',
        title: 'MENUITEMS.PATIENTS.LIST.ALL-PATIENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/patients/add-patient',
        title: 'MENUITEMS.PATIENTS.LIST.ADD-PATIENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/patients/edit-patient',
        title: 'MENUITEMS.PATIENTS.LIST.EDIT-PATIENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/patients/patient-profile',
        title: 'MENUITEMS.PATIENTS.LIST.PROFILE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },




  // Doctor Modules
  {
    path: '/doctor/dashboard',
    title: 'MENUITEMS.DOCTOR.DASHBOARD',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Doctor'],
    submenu: [],
  },
  {
    path: '/doctor/appointments',
    title: 'MENUITEMS.DOCTOR.APPOINTMENTS',
    iconType: 'material-icons-two-tone',
    icon: 'assignment',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Doctor'],
    submenu: [],
  },
  {
    path: '/doctor/doctors',
    title: 'MENUITEMS.DOCTOR.DOCTORS',
    iconType: 'material-icons-two-tone',
    icon: 'supervised_user_circle',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Doctor'],
    submenu: [],
  },
  {
    path: '/doctor/patients',
    title: 'MENUITEMS.DOCTOR.PATIENTS',
    iconType: 'material-icons-two-tone',
    icon: 'face',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Doctor'],
    submenu: [],
  },
  {
    path: '/doctor/settings',
    title: 'MENUITEMS.DOCTOR.SETTINGS',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Doctor'],
    submenu: [],
  },
  {
    path: '/doctor/consultation',
    title: 'consultation',
    iconType: 'material-icons-two-tone',
    icon: 'restore_page',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Doctor'],
    submenu: [],
  },
  {
    path: '/apps/chat',
    title: 'MENUITEMS.DOCTOR.CHAT',
    iconType: 'material-icons-two-tone',
    icon: 'chat',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Doctor'],
    submenu: [],
  },
  // Patient Modules
  {
    path: '/patient/dashboard',
    title: 'MENUITEMS.PATIENT.DASHBOARD',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [],
  },
  {
    path: '',
    title: 'MENUITEMS.PATIENT.APPOINTMENTS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'assignment',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [
      {
        path: '/patient/appointments/book',
        title: 'MENUITEMS.PATIENT.APPOINTMENTS.LIST.BOOK-APPOINTMENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/patient/appointments/today',
        title: 'MENUITEMS.PATIENT.APPOINTMENTS.LIST.TODAY',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/patient/appointments/upcoming',
        title: 'MENUITEMS.PATIENT.APPOINTMENTS.LIST.UPCOMING',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/patient/appointments/past',
        title: 'MENUITEMS.PATIENT.APPOINTMENTS.LIST.PAST',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '/patient/prescriptions',
    title: 'MENUITEMS.PATIENT.PRESCRIPTIONS',
    iconType: 'material-icons-two-tone',
    icon: 'receipt_long',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [],
  },
  {
    path: '/patient/history',
    title: 'MENUITEMS.PATIENT.MEDICAL-RECORD',
    iconType: 'material-icons-two-tone',
    icon: 'restore_page',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [],
  },
  {
    path: '/patient/history',
    title: 'Medical History',
    iconType: '',
    icon: '',
    class: 'ml-menu',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [],
  },
  {
    path: '/patient/billing',
    title: 'MENUITEMS.PATIENT.BILLING',
    iconType: 'material-icons-two-tone',
    icon: 'receipt',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [],
  },
  {
    path: '/apps/chat',
    title: 'MENUITEMS.PATIENT.CHAT',
    iconType: 'material-icons-two-tone',
    icon: 'chat',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [],
  },
  {
    path: '/patient/settings',
    title: 'MENUITEMS.PATIENT.SETTINGS',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Patient'],
    submenu: [],
  },
  {
    path: 'calendar',
    title: 'Calendar',
    iconType: 'material-icons-two-tone',
    icon: 'event_note',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: 'badge bg-blue sidebar-badge float-end',
    role: ['Admin', 'Doctor'],
    submenu: [],
  },

  // Common Modules

  {
    path: '',
    title: 'Reanimation',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['Admin', 'Doctor'],
    submenu: [],
  },
  {
    path: '',
    title: 'MENUITEMS.ROOMS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'hotel',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/room/all-rooms',
        title: 'MENUITEMS.ROOMS.LIST.ALLOTED-ROOMS',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/room/add-allotment',
        title: 'MENUITEMS.ROOMS.LIST.NEW-ALLOTMENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/room/edit-allotment',
        title: 'MENUITEMS.ROOMS.LIST.EDIT-ALLOTMENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'MENUITEMS.STAFF.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'people_alt',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/staff/all-staff',
        title: 'MENUITEMS.STAFF.LIST.ALL-STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/staff/add-staff',
        title: 'MENUITEMS.STAFF.LIST.ADD-STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/staff/edit-staff',
        title: 'MENUITEMS.STAFF.LIST.EDIT-STAFF',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/staff/staff-profile',
        title: 'MENUITEMS.STAFF.LIST.PROFILE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'surgical',
    iconType: 'material-icons-two-tone',
    icon: 'people_alt',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/Surgical procedure/allsurgical procedure',
        title: 'all surgical procedure',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/Surgical procedure/add-surgical procedure',
        title: 'Add surgical procedure',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/Surgical procedure/edit-surgical procedure',
        title: 'Edit SurgicalProcedure',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/Surgical procedure/upload-surgical procedure',
        title: 'surgical procedure upload',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },




];
