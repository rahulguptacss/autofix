export interface Feature {
  icon: string;
  text1: string;
  text2: string;
}

export interface Stat {
  icon: string;
  number: string;
  text: string;
}

export interface HeroData {
  bg_image: string;
  tags: string[];
  title_line1: string;
  title_line2: string;
  title_highlight: string;
  description: string;
  button_text?: string;
  features: Feature[];
  stats: Stat[];
}

export interface Experience {
  icon: string;
  years: string;
  text1: string;
  text2: string;
}

export interface AboutStat {
  value: string;
  text1: string;
  text2: string;
}

export interface Ceo {
  image: string;
  name: string;
  role: string;
}

export interface AboutData {
  image1: string;
  image2: string;
  experience: Experience;
  subtitle: string;
  title_line1: string;
  title_line2: string;
  title_highlight: string;
  description: string;
  stats: AboutStat[];
  points: string[];
  ceo: Ceo;
  button_text?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  img: string;
}

export interface ServicesData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  list: ServiceItem[];
}

export interface StatisticItem {
  icon: string;
  value: string;
  label: string;
}

export interface StatisticsData {
  bg_image: string;
  side_image: string;
  subtitle: string;
  title_line1: string;
  title_line2: string;
  list: StatisticItem[];
}

export interface BlogDetailsSectionData {
  title?: string;
  paragraph: string;
  image?: string;
  imagePosition?: 'left' | 'right';
}

export interface BlogItem {
  id: number;
  title: string;
  desc: string;
  date: string;
  month: string;
  author: string;
  dateFull: string;
  tag: string;
  img: string;
  authorImg: string;
  intro?: string;
  contentSections?: BlogDetailsSectionData[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface BlogData {
  breadcrumb?: BreadcrumbData;
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  list: BlogItem[];
  button_text?: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title_line1: string;
  title_line2: string;
  desc: string;
  icon: string;
  image: string;
}

export interface ProcessData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  bg_image?: string;
  steps: ProcessStep[];
  call_to_action: {
    phone: string;
    button_text: string;
    call_text?: string;
  };
  bottom_features: {
    icon: string;
    text: string;
  }[];
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  features: WhyChooseUsFeature[];
  button_text: string;
  phone: string;
  call_text?: string;
  before_image: string;
  after_image: string;
  badge: {
    text1: string;
    text2: string;
    text3: string;
    years: string;
  };
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface TopBarData {
  address: string;
  phone: string;
  email: string;
  social_title: string;
  socials: SocialLink[];
  working_hours: string;
}

export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
  dropdownLinks?: { name: string; href: string }[];
}

export interface HeaderData {
  logo_text1: string;
  logo_text2: string;
  logo_desc: string;
  links: NavLink[];
  button_text: string;
}

export interface FooterAbout {
  desc: string;
  socials: SocialLink[];
}

export interface FooterContact {
  address_line1: string;
  address_line2: string;
  phone: string;
  email: string;
  working_hours: string[];
}

export interface FooterData {
  about: FooterAbout;
  quick_links: NavLink[];
  services: NavLink[];
  contact: FooterContact;
  copyright: string;
  bottom_links: NavLink[];
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  siteName?: string;
  siteUrl?: string;
  defaultTitle?: string;
  defaultDescription?: string;
  ogImage?: string;
  locale?: string;
}

export interface BreadcrumbPath {
  label: string;
  href?: string;
}

export interface BreadcrumbData {
  title: string;
  paths: BreadcrumbPath[];
  bgImage: string;
}

export interface ComponentConfig {
  key: string;
  component: string;
}

export interface PageData {
  breadcrumb: BreadcrumbData;
  components: ComponentConfig[];
  seo: SEOData;
}

export interface ServiceBenefit {
  icon: string;
  title: string;
}

export interface ServiceOverview {
  title: string;
  description: string;
}

export interface ServiceIncludedBadge {
  text1: string;
  text2: string;
}

export interface ServiceIncluded {
  title: string;
  list: string[];
  image: string;
  badge: ServiceIncludedBadge;
}

export interface ServiceSidebar {
  servicesTitle: string;
  helpTitle: string;
  phone: string;
  hours: string;
  buttonText: string;
}

export interface ServiceDetailsData {
  breadcrumb: BreadcrumbData;
  mainImage: string;
  subtitle: string;
  title1: string;
  title2: string;
  quote: string;
  description: string;
  benefits: ServiceBenefit[];
  overview: ServiceOverview;
  included: ServiceIncluded;
  sidebar: ServiceSidebar;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  working_hours: string;
}

export interface ContactForm {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  fields: FormField[];
  submitText: string;
}

export interface ContactData {
  subtitle: string;
  title_highlight: string;
  title_line1: string;
  description: string;
  contact_info: ContactInfo;
  form: ContactForm;
}

export interface TeamDetailsSkill {
  name: string;
  percentage: number;
}

export interface TeamDetailsData {
  sidebar: {
    title: string;
    contactTitle: string;
    phone: string;
    email: string;
  };
  aboutTitle: string;
  skillsTitle: string;
  skills: TeamDetailsSkill[];
}

export interface BlogDetailsData {
  breadcrumb?: BreadcrumbData;
  sidebar: {
    searchTitle: string;
    categoriesTitle: string;
    categories: string[];
    recentPostsTitle: string;
    tagsTitle: string;
    tags: string[];
    assistanceBox?: {
      bgImage: string;
      title: string;
      desc: string;
      callText: string;
      phone: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export interface BrandItem {
  name: string;
  logo: string;
}

export interface BrandsData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  searchPlaceholder: string;
  searchButtonText: string;
  brandsList: BrandItem[];
}

export interface PricingItem {
  image: string;
  iconName: string;
  title: string;
  description: string;
  price: string;
}

export interface PricingData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  starting_at_text?: string;
  onwards_text?: string;
  pricingList: PricingItem[];
}

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon: string;
  required?: boolean;
  optionalText?: string;
  options?: FormFieldOption[];
  fullWidth?: boolean;
}

export interface BookServiceFormStep {
  number: string;
  title: string;
  desc: string;
  fields: FormField[];
}

export interface BookServiceSidebarFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface BookServiceData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  title_line2: string;
  description: string;
  form: {
    step1: BookServiceFormStep;
    step2: BookServiceFormStep;
    step3: BookServiceFormStep;
    submitText: string;
    securityText: string;
  };
  sidebar: {
    imageCard: {
      image: string;
      text1: string;
      text2: string;
    };
    features: {
      title: string;
      list: BookServiceSidebarFeature[];
    };
    contactBox: {
      bgImage: string;
      phoneTitle: string;
      phoneSub: string;
      phone: string;
      emailTitle: string;
      email: string;
      signature: string;
    };
  };
}

export interface GalleryPhoto {
  image: string;
  title: string;
}

export interface GalleryVideo {
  image: string;
  videoUrl: string;
  duration: string;
  title: string;
  desc: string;
}

export interface GalleryData {
  breadcrumb: BreadcrumbData;
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  photoTabLabel: string;
  videoTabLabel: string;
  photosTitle: string;
  videosTitle: string;
  photos: GalleryPhoto[];
  videos: GalleryVideo[];
}

export interface TestimonialItem {
  id: string;
  carImage: string;
  avatar: string;
  rating: number;
  quote: string;
  author: string;
  location: string;
  carModel: string;
}

export interface TestimonialData {
  breadcrumb: BreadcrumbData;
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  items: TestimonialItem[];
}

export interface TemplateSections {
  bookService: BookServiceData;
  serviceDetails: ServiceDetailsData;
  hero: HeroData;
  about: AboutData;
  services: ServicesData;
  statistics: StatisticsData;
  blog: BlogData;
  process: ProcessData;
  whyChooseUs: WhyChooseUsData;
  mission: MissionData;
  vision: VisionData;
  ourTeam: OurTeamData;
  contact: ContactData;
  teamDetails: TeamDetailsData;
  blogDetails: BlogDetailsData;
  brands: BrandsData;
  pricing: PricingData;
  gallery: GalleryData;
  testimonials: TestimonialData;
  faq?: FaqData;
}

export interface PolicyListItem {
  id: string;
  title: string;
  description: string;
}

export interface PolicyPageData {
  breadcrumb: BreadcrumbData;
  content: {
    tagline: string;
    title: string;
    titleRed: string;
    description: string;
    list: PolicyListItem[];
  };
}

export interface Template1 {
  pages: {
    home: PageData;
    bookService?: PageData;
    about?: PageData;
    missionVision?: PageData;
    whyChooseUs?: PageData;
    ourTeam?: PageData;
    teamDetails?: PageData;
    services?: PageData;
    serviceDetails?: PageData;
    blog?: PageData;
    blogDetails?: PageData;
    contact?: PageData;
    brands?: PageData;
    pricing?: PageData;
    testimonials?: PageData;
    gallery?: PageData;
    sitemap?: SitemapData;
    faq?: PageData;
    termsConditions?: PolicyPageData;
    privacyPolicy?: PolicyPageData;
    cancellationPolicy?: PolicyPageData;
  };
  sections: TemplateSections;
}

export interface SiteData {
  common: {
    Topbar: TopBarData;
    Header: HeaderData;
    Footer: FooterData;
    seo: SEOData;
  };
  categories: {
    AutoRepair: {
      templateComponents: {
        "template-1": Template1;
      }
    }
  };
}

export interface MissionFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface MissionData {
  subtitle: string;
  title_highlight: string;
  title_line1: string;
  description: string;
  features: MissionFeature[];
  image: string;
  badge_icon: string;
  badge_text1: string;
  badge_text2: string;
}

export interface VisionFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface VisionData {
  subtitle: string;
  title_highlight: string;
  title_line1: string;
  description: string;
  features: VisionFeature[];
  image: string;
}

export interface OurTeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
}

export interface OurTeamData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  members: OurTeamMember[];
}


export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqData {
  breadcrumb?: BreadcrumbData;
  sidebar: {
    title: string;
    description: string;
    contacts: {
      icon: string;
      title: string;
      detail: string;
      subDetail: string;
    }[];
    extraHelp: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
    bottomImage: string;
    imageTextLine1?: string;
    imageTextLine2?: string;
  };
  content: {
    tagline: string;
    titleBlue: string;
    titleRed: string;
    rightText: string;
    list: FaqItem[];
  };
}

export interface SitemapLink {
  label: string;
  url: string;
}

export interface SitemapSection {
  icon: string;
  title: string;
  links: SitemapLink[];
}

export interface SitemapData {
  breadcrumb: BreadcrumbData;
  content: {
    tagline: string;
    title: string;
    titleRed: string;
    description: string;
    sections: SitemapSection[];
  };
}
