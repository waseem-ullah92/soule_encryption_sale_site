import identifiableInfo from "../../../assets/svg/modal-svg/identifiableInfo.svg";
import emergency from "../../../assets/svg/modal-svg/emergency.svg";
import hobbiesNinterest from "../../../assets/svg/modal-svg/hobbiesNinterest.svg";
import employement from "../../../assets/svg/modal-svg/employement.svg";
import mySpouse from "../../../assets/svg/modal-svg/spouseIcon.svg";
import myChild from "../../../assets/svg/modal-svg/childicon.svg";
import pets from "../../../assets/svg/modal-svg/petsIcon.svg";
import memory from "../../../assets/svg/modal-svg/memoriesIcon.svg";
import insuranceIcon from "../../../assets/svg/modal-svg/insuranceIcon.svg";
import carIcon from "../../../assets/svg/modal-svg/carIcon.svg";
import propertyIcon from "../../../assets/svg/modal-svg/propertyIcon.svg";
import home from "../../../assets/svg/modal-svg/homeIcon.svg";
import willIcon from "../../../assets/svg/modal-svg/willIcon.svg";
import attorneyIcon from "../../../assets/svg/modal-svg/attorneyIcon.svg";
import trustIcon from "../../../assets/svg/modal-svg/trustIcon.svg";
import accountsIcon from "../../../assets/svg/modal-svg/accountsIcon.svg";
import cardsIcon from "../../../assets/svg/modal-svg/cardsIcon.svg";
import loanIcon from "../../../assets/svg/modal-svg/loanIcon.svg";
import lifeInsuranceIcon from "../../../assets/svg/modal-svg/lifeInsuranceIcon .svg";
import pensionIcon from "../../../assets/svg/modal-svg/pensionIcon.svg";
import adviserIcon from "../../../assets/svg/modal-svg/adviserIcon.svg";
import healthInsuranceIcon from "../../../assets/svg/modal-svg/healthInsuranceIcon.svg";
import doctorIcon from "../../../assets/svg/modal-svg/doctorIcon.svg";
import medicalDocmentsIcon from "../../../assets/svg/modal-svg/medicalDocmentsIcon.svg";
import medicationsIcon from "../../../assets/svg/modal-svg/medicationsIcon.svg";
import illnessIcon from "../../../assets/svg/modal-svg/illnessIcon.svg";

import careProviderIcon from "../../../assets/svg/modal-svg/careProviderIcon.svg";
import livingPrefrenceIcon from "../../../assets/svg/modal-svg/livingPrefrenceIcon.svg";
import elderCareFinanceIcon from "../../../assets/svg/modal-svg/elderCareFinanceIcon.svg";

import funeralGuideIcon from "../../../assets/svg/modal-svg/funeralGuideIcon.svg";
import servicePrefrencesIcon from "../../../assets/svg/modal-svg/servicePrefrencesIcon.svg";
import letterPlanningIcon from "../../../assets/svg/modal-svg/letterPlanningIcon.svg";
import aboutLifeIcon from "../../../assets/svg/modal-svg/aboutLifeIcon.svg";

import passwordMangementIcon from "../../../assets/svg/modal-svg/passwordMangementIcon.svg";
import emailIcon from "../../../assets/svg/modal-svg/emailIcon.svg";
import moneyManagementIcon from "../../../assets/svg/modal-svg/moneyManagementIcon.svg";
import deviceIcon from "../../../assets/svg/modal-svg/deviceIcon.svg";

import bucketListIcon from "../../../assets/svg/modal-svg/bucketListIcon.svg";
import eyeIcon from "../../../assets/svg/modal-svg/eyeIcon.svg";
import outcomeGoalIcon from "../../../assets/svg/modal-svg/outcomeGoalIcon.svg";
import processGoalIcon from "../../../assets/svg/modal-svg/processGoalIcon.svg";
import performanceGoalIcon from "../../../assets/svg/modal-svg/performanceGoalIcon.svg";

import nomineeForHomeIcon from "../../../assets/svg/modal-svg/nomineeForHomeIcon.svg";
import nomineeForPropertyIcon from "../../../assets/svg/modal-svg/nomineeForPropertyIcon.svg";
import nomineeForLegalDocIcon from "../../../assets/svg/modal-svg/nomineeForLegalDocIcon.svg";
import nomineeForFinancialIcon from "../../../assets/svg/modal-svg/nomineeForFinancialIcon.svg";
import nomineeForPetsIcon from "../../../assets/svg/modal-svg/nomineeForPetsIcon.svg";
import securityIcon from "../../../assets/svg/modal-svg/securityIcon.svg";

import addressBookIcon from "../../../assets/svg/modal-svg/addressBookIcon.svg";
import calendarIcon from "../../../assets/svg/modal-svg/calendarIcon.svg";
import eventReminderIcon from "../../../assets/svg/modal-svg/eventReminderIcon.svg";
import documentsIcon from "../../../assets/svg/modal-svg/documentsIcon.svg";

interface FeatureCard {
  id: string;
  heading?: string;
  paragraph?: string;
  boxShadow?: string;
  modalData?: {
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    modalContent?: ModalContent[];
  };
}

interface ModalContent {
  id: string;
  modalImg?: string;
  modalImgText?: string;
  modalDescription?: string;
  list?: ListItem[];
}

interface ListItem {
  id?: string;
  listDescription?: string;
}
export const featuresCardMockData : FeatureCard[] = [
  {
    id: "1",
    heading: "Personal Information",
    paragraph:
      "Soul Encryption prioritizes the utmost confidentiality and protection of your personal information. This encompasses essential data such as your full name, contact details like email and phone number, as well as any financial information provided for transactions. \nWe understand the significance of your birthdate and age... ",
    boxShadow:
      " rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 6,
      lg:6,
      md:6,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: identifiableInfo,
          modalImgText: "Identifiable Information",
          modalDescription: "Soul Encryption prioritizes the utmost confidentiality and protection of your personal information. This encompasses essential data such as your full name, contact details like email and phone number, as well as any financial information provided for transactions. \nWe understand the significance of your birthdate and age, and the personal information such as employment history, hobbies, interest, emergency contacts etc. handle them with the utmost care. Moreover, any identifiers like IP addresses or device information are secured, ensuring your online activities remain private. Your trust in Soul Encryption extends to sensitive data like health information or biometric details, all of which are fortified within our advanced security protocols.",
        },
        {
          id: "2",
          modalImg: emergency,
          modalImgText: "In case of an Emergency",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: hobbiesNinterest,
          modalImgText: "Hobbies & Interest",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: employement,
          modalImgText: "Employment",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "2",
    heading: "Friends and family",
    paragraph:
      "The place to store details about all the people who are important in your life. From your family, nominees, executors, attorneys, advisors and more this is where to store the people who will likely play a part in your end of life closure. \nThis is where you can store all of your precious memories.",
    boxShadow:
      " rgba(178, 240, 230, 1) 0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1) 0px -20px,  0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 3,
      lg:3,
      md:3,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: mySpouse,
          modalImgText: "My Spouse/Partner",
          modalDescription: "This could be anything from photos, videos, messages for your family, the secret chocolate cake recipe. They all go in here. </br>  Inevitably a tough section to complete but one that will be treasured by future generations.",
        },
        {
          id: "2",
          modalImg: myChild,
          modalImgText: "My Children",
          modalDescription: "",
        },
        { id: "3", modalImg: pets, modalImgText: "Pets", modalDescription: "" },
        {
          id: "4",
          modalImg: memory,
          modalImgText: "Memories",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "3",
    heading: "Home and Properties",
    paragraph:
      "Property is anything that a person or business has legal title over. Property can be either tangible or intangible, and having legal title to it grants the owner certain enforceable rights. \nTypical examples of tangible property include real estate, also known as real property, vehicles, furniture.",
    boxShadow:
      " rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3)0px -20px, rgba(255, 179, 0, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
    modalData: {
      xl: 3,
      lg:3,
      md:3,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: home,
          modalImgText: "Home",
          modalDescription: "Typical examples of tangible property include real estate, also known as real property, vehicles, furniture, and equipment  </br>In legal terms, all property will be classified as either personal property or real  property.</br>Personal property is movable property. It's anything that can be subject to ownership, except land. Real property is immovable property - it's land and anything attached to the land.",
        },
        {
          id: "2",
          modalImg: carIcon,
          modalImgText: "Vehicles",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: propertyIcon,
          modalImgText: "Propertiest",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: insuranceIcon,
          modalImgText: "Insurance",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "4",
    heading: "Legal Docs and Contracts",
    paragraph:
      "Legal document - (law) a document that states some contractual relationship or grants some right. legal instrument, official document, instrument. document, papers, written document - writing that provides information (especially information of an official nature. \nA document is legal if its creator intends for it to be enforceable in a court of law.",
    boxShadow:
      " rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3)0px -20px, rgba(255, 179, 0, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
    modalData: {
      xl: 4,
      lg:4,
      md:4,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: willIcon,
          modalImgText: "Will",
          modalDescription: "A document is legal if its creator intends for it to be enforceable in a court of law. </br>In order for a document to be legal, it must also adhere to the laws of the jurisdiction where it will be enforced. The document should also be properly signed, witnessed and filed to be considered legal.",
        },
        {
          id: "2",
          modalImg: attorneyIcon,
          modalImgText: "Power of Attorney",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: trustIcon,
          modalImgText: "Trust",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "5",
    heading: "Financial",
    paragraph:
      "The place to store your account information – everything from social media to mortgage and utility accounts. \nSo much of our life is conducted online now it can be impossible for relatives to find everything they need to close down.",
    boxShadow:
      " rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 4,
      lg:4,
      md:4,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: accountsIcon,
          modalImgText: "Accounts and Assets",
          modalDescription: "",
        },
        {
          id: "2",
          modalImg: cardsIcon,
          modalImgText: "Credit card",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: loanIcon,
          modalImgText: "Loan",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: lifeInsuranceIcon,
          modalImgText: "Life Insurance",
          modalDescription: "",
        },
        {
          id: "5",
          modalImg: pensionIcon,
          modalImgText: "Pensions",
          modalDescription: "",
        },
        {
          id: "6",
          modalImg: adviserIcon,
          modalImgText: "Advisors and Agents",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "6",
    heading: "Health",
    paragraph:
      "Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. \nThis space is to capture your needs and organise your Health and Medical related documents.",
    boxShadow:
      " rgba(178, 240, 230, 1) 0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1) 0px -20px,  0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 4,
      lg:4,
      md:4,
      sm:4,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: healthInsuranceIcon,
          modalImgText: "Health Insurance",
          modalDescription: "",
        },
        {
          id: "2",
          modalImg: doctorIcon,
          modalImgText: "Doctors",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: medicalDocmentsIcon,
          modalImgText: "Medical Documents",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: medicationsIcon,
          modalImgText: "Medications",
          modalDescription: "",
        },
        {
          id: "5",
          modalImg: illnessIcon,
          modalImgText: "Illnesses",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "7",
    heading: "Aging/Retirement",
    paragraph:
      "In an ever-changing complex world, and as your personal situation changes, managing your pension, and finances in general is complicated as well.",
    boxShadow:
      " rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 4,
      lg:4,
      md:4,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: careProviderIcon,
          modalImgText: "Care Providers",
          modalDescription: "This space is to manage this effectively. It’s vital that your income in retirement is managed as efficiently as possible. </br>This category is to record your wishes so others understand your needs. ",
        },
        {
          id: "2",
          modalImg: livingPrefrenceIcon,
          modalImgText: "Eldercare Living Preferences",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: elderCareFinanceIcon,
          modalImgText: "Eldercare Finances",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "8",
    heading: "Funeral Planning",
    paragraph:
      "A funeral plan is the best way to arrange your funeral in advance, whilst safeguarding loved ones from rising funeral costs.",
    boxShadow:
      " rgba(178, 240, 230, 1) 0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1) 0px -20px,  0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 3,
      lg:3,
      md:3,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: funeralGuideIcon,
          modalImgText: "Funeral Guide",
          modalDescription: "A funeral plan is the best way to arrange your funeral in advance, whilst</br> safeguarding loved ones from rising funeral costs.",
        },
        {
          id: "2",
          modalImg: servicePrefrencesIcon,
          modalImgText: "Service Preferences",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: letterPlanningIcon,
          modalImgText: "Letters Planning",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: aboutLifeIcon,
          modalImgText: "About my Life",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "9",
    heading: "Digital Assets",
    paragraph:
      "Digital asset is content that's stored digitally. \nThat could mean images, photos, videos, files containing text, spreadsheets, or slide decks, Passwords , cloud storage details etc.",
    boxShadow:
      " rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3)0px -20px, rgba(255, 179, 0, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
    modalData: {
      xl: 4,
      lg:4,
      md:4,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: passwordMangementIcon,
          modalImgText: "Password Management",
          modalDescription: "Digital asset is content that's stored digitally.</br> That could mean images, photos, videos, files containing text, spreadsheets, or slide decks, Passwords , cloud storage details etc.",
        },
        {
          id: "2",
          modalImg: emailIcon,
          modalImgText: "Email Accounts & Social Media",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: moneyManagementIcon,
          modalImgText: "Payment & Money Management",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: deviceIcon,
          modalImgText: "Devices",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "10",
    heading: "Vision / Bucket List",
    paragraph:
      "A vision board is a visualization tool which refers to a board of any sort used to build a collage of words and pictures that represent your goals and dreams.",
    boxShadow:
      " rgba(178, 240, 230, 1) 0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1)0px -20px, rgba(178, 240, 230, 1) 0px -20px,  0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 4,
      lg:4,
      md:4,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: bucketListIcon,
          modalImgText: "Bucket list",
          modalDescription: "They can be bought from a professional supplier or made with cork or </br> poster boards.",
        },
        {
          id: "2",
          modalImg: eyeIcon,
          modalImgText: "Vision board",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: outcomeGoalIcon,
          modalImgText: "Outcome goals",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: processGoalIcon,
          modalImgText: "Process goals",
          modalDescription: "",
        },
        {
          id: "5",
          modalImg: performanceGoalIcon,
          modalImgText: "Performance goals",
          modalDescription: "",
        },
      ],
    },
  },
  {
    id: "11",
    heading: "Nominees",
    paragraph:
      "A nominee is a person or firm into whose name securities or other properties are transferred to facilitate transactions while leaving the customer as the actual owner.",
    boxShadow:
      " rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3) 0px -20px, rgba(255, 179, 0, 0.3)0px -20px, rgba(255, 179, 0, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
    modalData: {
      xl: 4,
      lg:4,
      md:4,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: nomineeForHomeIcon,
          modalImgText: "Nominee for Home",
          modalDescription: "A nominee account is a type of account in which a stockbroker holds  shares belonging to clients, making buying and selling those shares easier.",
          list: [
            {
              id:"1",
              listDescription:"A person or entity who is requested or named to act for another, such as an agent or trustee.",
            },
            {
              id:"2",
              listDescription:"A potential successor to another's rights under a contract",
            },
          ],
     
        },
        {
          id: "2",
          modalImg: nomineeForPropertyIcon,
          modalImgText: "Nominee for Property",
          modalDescription: "",
          // list:[{}]
        },
        {
          id: "3",
          modalImg: nomineeForLegalDocIcon,
          modalImgText: "Nominee for Legal Doc",
          modalDescription: "",
          // list:[{}]
        },
        {
          id: "4",
          modalImg: nomineeForFinancialIcon,
          modalImgText: "Nominee for Financials",
          modalDescription: "",
          // list:[{}]
        },
        {
          id: "5",
          modalImg: nomineeForPetsIcon,
          modalImgText: "Nominee for Pets",
          modalDescription: "",
          // list:[{}]
        },
      ],
    },
  },
  {
    id: "12",
    heading: "Other Features",
    paragraph:
      "We do offer many multifarious features and services like handy reminders , contacts etc.",
    boxShadow:
      " rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 3,
      lg:3,
      md:3,
      sm:6,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: addressBookIcon,
          modalImgText: "Address Book",
          modalDescription: "We do offer many multifarious features and services like handy reminders , contacts etc",
        },
        {
          id: "2",
          modalImg: calendarIcon,
          modalImgText: "Calendar",
          modalDescription: "",
        },
        {
          id: "3",
          modalImg: eventReminderIcon,
          modalImgText: "Event Reminder",
          modalDescription: "",
        },
        {
          id: "4",
          modalImg: documentsIcon,
          modalImgText: "Documents",
          modalDescription: "",
        },
        
      ],
    },
  },
  {
    id: "13",
    heading: "Security",
    paragraph: "Protecting your information is primary importance to us.",
    boxShadow:
      " rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px, rgba(255, 59, 131, 0.3) 0px -20px,   0px 4px 16px 0px rgba(0, 0, 0, 0.10);",
    modalData: {
      xl: 12,
      lg:12,
      md:12,
      sm:12,
      xs:12,
      modalContent: [
        {
          id: "1",
          modalImg: securityIcon,
          modalImgText: "",
          modalDescription: "We have your account <strong>security</strong> covered with two-factor authentication used at </br> every login, encryption and SSLs. </br> We have your account <strong>security</strong> covered with two-factor authentication used at every  login, encryption and SSLs. </br> Everything is encrypted and saved securely for you.",
        },
       
      ],
    },
  },
];
