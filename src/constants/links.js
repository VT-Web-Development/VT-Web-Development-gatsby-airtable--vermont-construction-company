import React from 'react'
import { FaCcStripe, FaCreditCard, FaAlipay } from 'react-icons/fa'

//! Using dummy URL.
const DUMMY_URL = `/services/payments`

export const links = {
  services: {
    label: `Services`,
    url: DUMMY_URL,
    isDropdown: true,

    //! Using function to lazy evaluate options.
    getDropdownOptions: () => [
      {
        label: `New Build Homes`,
        url: DUMMY_URL,
      },
      {
        label: `House Extensions`,
        url: DUMMY_URL,
      },
      {
        label: `House Renovation`,
        url: DUMMY_URL,
      },
      {
        label: `Property Development`,
        url: DUMMY_URL,
      },
      {
        label: `Landscaping & External Works`,
        url: DUMMY_URL,
      },
      {
        label: `Commercial Construction`,
        url: DUMMY_URL,
      },
    ],
  },
  about: {
    label: `About`,
    url: '/aboutUs',
    isDropdown: false,
  },
  projects: {
    label: `Projects`,
    url: '/projects',
    isDropdown: false,
  },
  getAQuote: {
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
