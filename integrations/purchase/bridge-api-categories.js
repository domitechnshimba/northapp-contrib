import {
  ACTIVITY_TYPE_PURCHASE,
  PURCHASE_CATEGORY_TRANSPORTATION_FUEL,
  PURCHASE_CATEGORY_TRANSPORTATION_AUTOMOTIVE_MAINTENANCE_AND_REPAIR,
  PURCHASE_CATEGORY_STORE_BOOKS,
  PURCHASE_CATEGORY_STORE_CLOTHING,
  PURCHASE_CATEGORY_STORE_FOOD,
  PURCHASE_CATEGORY_HEALTHCARE_DOCTOR,
  PURCHASE_CATEGORY_MEDICINES_AND_HEALTH_PRODUCTS,
  PURCHASE_CATEGORY_STORE_GARDEN_AND_PET,
  PURCHASE_CATEGORY_STORE_FURNISHING,
  PURCHASE_CATEGORY_STORE_PERSONAL_CARE,
  PURCHASE_CATEGORY_STORE_HARDWARE,
  PURCHASE_CATEGORY_FINANCIAL_SERVICES,
  PURCHASE_CATEGORY_SOCIAL_PROTECTION,
  PURCHASE_CATEGORY_INSURANCE,
  PURCHASE_CATEGORY_RECREATIONAL_SERVICES,
  PURCHASE_CATEGORY_INFORMATION_COMMUNICATION,
  PURCHASE_CATEGORY_FOOD_SERVING_SERVICES,
  PURCHASE_CATEGORY_TRANSPORT_AIR,
  PURCHASE_CATEGORY_TRANSPORT_RAIL,
  PURCHASE_CATEGORY_TRANSPORT_ROAD,
  PURCHASE_CATEGORY_RECREATIONAL_DURABLES,
  PURCHASE_CATEGORY_NON_DURABLE_HOUSEHOLD_GOODS,
  PURCHASE_CATEGORY_MISC_DWELLING,
  PURCHASE_CATEGORY_READY_FOOD,
  PURCHASE_CATEGORY_RENTAL,
  PURCHASE_CATEGORY_COMBINED_PASSENGER_TRANSPORT,
  PURCHASE_CATEGORY_MISC_SERVICES_PERSONAL_TRANSPORT,
  PURCHASE_CATEGORY_HOUSING,
  PURCHASE_CATEGORY_ELECTRICITY,
  PURCHASE_CATEGORY_GAS,
  PURCHASE_CATEGORY_HOUSEHOLD_MAINTENANCE,
  PURCHASE_CATEGORY_ENTERTAINMENT_HOTEL,
  PURCHASE_CATEGORY_ENTERTAINMENT_CIGAR_STORES,
  PURCHASE_CATEGORY_PACKAGE_HOLIDAYS,
  PURCHASE_CATEGORY_OTHER_SERVICES,
} from '../../definitions';

/*
 * Structure:
 * {
 *  Id: Associated Activity, // (- if parent Category) Category Name
 * }
 */
const idToCategory = {
  303: null, // - Withdrawals, checks & transfer
  326: null, // Internal transfer
  88: null, // Checks
  85: null, // Withdrawals
  78: null, // Transfer

  159: null, // - Taxes
  302: null, // Taxes
  209: null, // Property taxes
  208: null, // Income taxes
  207: null, // Taxes
  206: null, // Taxes - Others

  165: PURCHASE_CATEGORY_COMBINED_PASSENGER_TRANSPORT, // - Auto & Transport
  309: PURCHASE_CATEGORY_MISC_SERVICES_PERSONAL_TRANSPORT, // Tolls
  288: PURCHASE_CATEGORY_TRANSPORTATION_AUTOMOTIVE_MAINTENANCE_AND_REPAIR, // Car maintenance
  264: PURCHASE_CATEGORY_TRANSPORT_ROAD, // Car rental
  251: PURCHASE_CATEGORY_MISC_SERVICES_PERSONAL_TRANSPORT, // Parking
  247: PURCHASE_CATEGORY_INSURANCE, // Auto insurance
  198: PURCHASE_CATEGORY_TRANSPORT_AIR, // Plane ticket
  197: PURCHASE_CATEGORY_TRANSPORT_RAIL, // Train ticket
  196: PURCHASE_CATEGORY_COMBINED_PASSENGER_TRANSPORT, // Public transportation
  87: PURCHASE_CATEGORY_TRANSPORTATION_FUEL, // Gas & Fuel
  84: PURCHASE_CATEGORY_COMBINED_PASSENGER_TRANSPORT, // Auto & Transport - Others

  162: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // - Shopping
  441888: null, // Licences
  319: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // Movies
  318: PURCHASE_CATEGORY_RECREATIONAL_DURABLES, // Music
  272: PURCHASE_CATEGORY_STORE_CLOTHING, // Clothing & Shoes
  262: PURCHASE_CATEGORY_RECREATIONAL_DURABLES, // Sporting goods
  243: PURCHASE_CATEGORY_STORE_BOOKS, // Books
  186: PURCHASE_CATEGORY_RECREATIONAL_DURABLES, // Shopping - Others
  184: PURCHASE_CATEGORY_STORE_HARDWARE, // Hardware
  183: PURCHASE_CATEGORY_RECREATIONAL_DURABLES, // Gifts

  171: PURCHASE_CATEGORY_INFORMATION_COMMUNICATION, // - Bills & Utilities
  280: PURCHASE_CATEGORY_INFORMATION_COMMUNICATION, // Subscription - Others
  277: PURCHASE_CATEGORY_INFORMATION_COMMUNICATION, // Mobile phone
  258: PURCHASE_CATEGORY_INFORMATION_COMMUNICATION, // Home phone
  219: PURCHASE_CATEGORY_INFORMATION_COMMUNICATION, // Cable TV
  180: PURCHASE_CATEGORY_INFORMATION_COMMUNICATION, // Internet

  315: PURCHASE_CATEGORY_STORE_PERSONAL_CARE, // - Personal care
  321: PURCHASE_CATEGORY_STORE_PERSONAL_CARE, // Beauty care
  317: PURCHASE_CATEGORY_STORE_PERSONAL_CARE, // Personal care - Others
  316: PURCHASE_CATEGORY_STORE_PERSONAL_CARE, // Spa & Massage
  248: PURCHASE_CATEGORY_STORE_PERSONAL_CARE, // Cosmetics
  235: PURCHASE_CATEGORY_STORE_PERSONAL_CARE, // Hairdresser

  161: PURCHASE_CATEGORY_HOUSING, // - Home
  328: PURCHASE_CATEGORY_MISC_DWELLING, // Misc. utilities
  323: PURCHASE_CATEGORY_STORE_GARDEN_AND_PET, // Lawn & Garden
  293: PURCHASE_CATEGORY_MISC_DWELLING, // Water
  246: PURCHASE_CATEGORY_INSURANCE, // Home insurance
  222: PURCHASE_CATEGORY_HOUSEHOLD_MAINTENANCE, // Maintenance
  218: PURCHASE_CATEGORY_GAS, // Gas
  217: PURCHASE_CATEGORY_ELECTRICITY, // Electricity

  166: PURCHASE_CATEGORY_OTHER_SERVICES, // - Business services
  221: PURCHASE_CATEGORY_STORE_FURNISHING, // Office improvement
  220: PURCHASE_CATEGORY_NON_DURABLE_HOUSEHOLD_GOODS, // Offices - Others
  216: PURCHASE_CATEGORY_RENTAL, // Office Rent
  441900: PURCHASE_CATEGORY_OTHER_SERVICES, // Marketing
  441899: PURCHASE_CATEGORY_OTHER_SERVICES, // Legal Fees
  441898: null, // Training taxes
  441897: PURCHASE_CATEGORY_INSURANCE, // Disability Insurance
  441896: PURCHASE_CATEGORY_OTHER_SERVICES, // Outsourcing
  441895: PURCHASE_CATEGORY_OTHER_SERVICES, // Consulting
  441892: null, // Hiring fees
  441891: null, // Salary of executives
  441890: null, // Salaries
  441889: PURCHASE_CATEGORY_OTHER_SERVICES, // Accounting
  441886: null, // Employer contributions
  274: PURCHASE_CATEGORY_NON_DURABLE_HOUSEHOLD_GOODS, // Office supplies
  270: PURCHASE_CATEGORY_INFORMATION_COMMUNICATION, // Online services
  265: PURCHASE_CATEGORY_OTHER_SERVICES, // Business expenses
  205: null, // Printing
  204: null, // Shipping
  203: PURCHASE_CATEGORY_OTHER_SERVICES, // Office services
  202: PURCHASE_CATEGORY_OTHER_SERVICES, // Advertising
  90: PURCHASE_CATEGORY_OTHER_SERVICES, // General expenses - Others

  164: null, // - Bank
  756587: null, // Payment incidents
  306: PURCHASE_CATEGORY_FINANCIAL_SERVICES, // Banking services
  195: null, // Bank - Others
  194: null, // Mortgage
  192: null, // Savings
  191: null, // Monthly Debit
  89: null, // Mortgage refund
  79: PURCHASE_CATEGORY_FINANCIAL_SERVICES, // Banking fees and charges

  163: PURCHASE_CATEGORY_MEDICINES_AND_HEALTH_PRODUCTS, // - Health
  325: PURCHASE_CATEGORY_HEALTHCARE_DOCTOR, // Dentist
  322: PURCHASE_CATEGORY_HEALTHCARE_DOCTOR, // Optician / Eyecare
  268: PURCHASE_CATEGORY_HEALTHCARE_DOCTOR, // Health - Others
  261: PURCHASE_CATEGORY_HEALTHCARE_DOCTOR, // Doctor
  245: PURCHASE_CATEGORY_INSURANCE, // Health insurance
  236: PURCHASE_CATEGORY_MEDICINES_AND_HEALTH_PRODUCTS, // Pharmacy

  167: null, // - Education & Children
  267: PURCHASE_CATEGORY_SOCIAL_PROTECTION, // Baby-sitter & Daycare
  266: PURCHASE_CATEGORY_RECREATIONAL_DURABLES, // Toys
  259: null, // Student loan
  241: PURCHASE_CATEGORY_RENTAL, // Student housing
  240: null, // Pension
  239: null, // Tuition
  238: PURCHASE_CATEGORY_STORE_BOOKS, // School supplies
  237: null, // Education & Children - Others

  168: PURCHASE_CATEGORY_STORE_FOOD, // - Food & Dining
  313: PURCHASE_CATEGORY_FOOD_SERVING_SERVICES, // Coffee shop
  273: PURCHASE_CATEGORY_STORE_FOOD, // Supermarkets / Groceries
  260: PURCHASE_CATEGORY_READY_FOOD, // Fast foods
  188: PURCHASE_CATEGORY_STORE_FOOD, // Food - Others
  83: PURCHASE_CATEGORY_FOOD_SERVING_SERVICES, // Restaurants

  160: null, // - Misc. expenses
  324: null, // Laundry / Dry cleaning
  308: PURCHASE_CATEGORY_ENTERTAINMENT_CIGAR_STORES, // Tobacco
  294: null, // Charity
  278: PURCHASE_CATEGORY_INSURANCE, // Insurance
  276: null, // Others spending
  1: null, // Uncategorized

  170: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // - Entertainment
  320: PURCHASE_CATEGORY_FOOD_SERVING_SERVICES, // Eating out
  310: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // Winter sports
  269: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // Amusements
  263: PURCHASE_CATEGORY_ENTERTAINMENT_HOTEL, // Hotels
  249: PURCHASE_CATEGORY_PACKAGE_HOLIDAYS, // Travels / Vacation
  244: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // Arts & Amusement
  242: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // Sports
  227: PURCHASE_CATEGORY_FOOD_SERVING_SERVICES, // Bars & Clubs
  226: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // Hobbies
  224: PURCHASE_CATEGORY_STORE_GARDEN_AND_PET, // Pets
  223: PURCHASE_CATEGORY_RECREATIONAL_SERVICES, // Entertainment - Others

  2: null, // - Incomes
  441894: null, // Loans
  441893: null, // Grants
  327: null, // Pension
  314: PURCHASE_CATEGORY_RENTAL, // Rent
  289: null, // Savings
  283: null, // Business refunds
  282: null, // Internal transfer
  279: null, // Retirement
  271: null, // Deposit
  233: null, // Extra incomes
  232: PURCHASE_CATEGORY_FINANCIAL_SERVICES, // Services
  231: null, // Sales
  230: null, // Salaries
  80: null, // Interest incomes
  3: null, // Other incomes
};

export const BRIDGE_API_CATEGORIES = Object.entries(idToCategory).reduce(
  (accumulator, [id, purchaseType]) => {
    accumulator[id] = purchaseType ? { activityType: ACTIVITY_TYPE_PURCHASE, purchaseType } : null;
    return accumulator;
  },
  {}
);
