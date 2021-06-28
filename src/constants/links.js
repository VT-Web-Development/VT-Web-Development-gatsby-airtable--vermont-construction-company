export const links = {
  1: {
    label: `Services`,
    isDropdown: true,

    //! Using function to lazy evaluate options.
    getDropdownOptions: () => [
      {
        label: `New Build Homes`,
        url: '/services/new-build-homes',
      },
      {
        label: `House Extensions`,
        url: '/services/house-extensions',
      },
      {
        label: `House Renovation`,
        url: '/services/house-renovation',
      },
      {
        label: `Property Development`,
        url: '/services/property-development',
      },
      {
        label: `Landscaping & External Works`,
        url: '/services/landscaping-and-external-works',
      },
      {
        label: `Commercial Construction`,
        url: '/services/commercial-construction',
      },
    ],
  },
  2: {
    label: `About`,
    url: '/about-us',
    isDropdown: false,
  },
  3: {
    label: `Projects`,
    url: '/projects',
    isDropdown: false,
  },
  4: {
    label: `Get A Quote`,
    url: '/get-a-quote',
    isDropdown: false,

    // Pass an extra property props with classes
    // that will be used to insert dynamic classNames.
    props: {
      classes: 'call-to-action',
    },
  },
}

export const linkKeys = Object.keys(links)

// export default [
//   {
//     page: 'services',
//     label: 'services',
//     url: `/services/payments`,
//     icon: <FaCreditCard className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'services',
//     label: 'terminal',
//     url: `/services/payments`,
//     icon: <FaCreditCard className="icon" />,
//   },
//   {
//     page: 'services',
//     label: 'connect',
//     url: `/services/payments`,
//     icon: <FaCreditCard className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'services',
//     label: 'billing',
//     url: `/services/payments`,
//     icon: <FaCreditCard className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'about',
//     label: 'documentation',
//     url: `/services/payments`,
//     icon: <FaAlipay className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'about',
//     label: 'libraries',
//     url: `/services/payments`,
//     icon: <FaAlipay className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'about',
//     label: 'plugins',
//     url: `/services/payments`,
//     icon: <FaAlipay className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'projects',
//     label: 'jobs',
//     url: `/services/payments`,
//     icon: <FaCcStripe className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'projects',
//     label: 'customers',
//     url: `/services/payments`,
//     icon: <FaCcStripe className="icon" />,
//     isDropdown: true,
//   },
//   {
//     page: 'Get A Quote',
//     label: 'customers',
//     url: `/services/payments`,
//     isDropdown: false,
//   },
// ]
