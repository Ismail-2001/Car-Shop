import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  price: string;
  desc: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}