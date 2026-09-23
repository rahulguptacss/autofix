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
}

export interface BlogData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  list: BlogItem[];
  button_text?: string;
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

export interface TemplateSections {
  hero: HeroData;
  about: AboutData;
  services: ServicesData;
  statistics: StatisticsData;
  blog: BlogData;
}

export interface Template1 {
  pages: {
    home: PageData;
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
