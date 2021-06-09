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
        label: `Terminal`,
        url: DUMMY_URL,
      },
      {
        label: `Connect`,
        url: DUMMY_URL,
      },
      {
        label: `Billing`,
        url: DUMMY_URL,
      },
    ],
  },
  about: {
    label: `About`,
    url: DUMMY_URL,
    isDropdown: true,
    getDropdownOptions: () => [
      {
        label: 'documentation',
        url: DUMMY_URL,
      },
      {
        label: 'libraries',
        url: DUMMY_URL,
      },
      {
        label: 'plugins',
        url: DUMMY_URL,
      },
    ],
  },
  projects: {
    label: `Projects`,
    url: DUMMY_URL,
    isDropdown: true,
    getDropdownOptions: () => [
      {
        label: 'jobs',
        url: DUMMY_URL,
      },
      {
        label: 'customers',
        url: DUMMY_URL,
      },
    ],
  },
  getAQuote: {
    label: `Get A Quote`,
    url: '/contact',
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
