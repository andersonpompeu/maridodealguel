export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'wrench' | 'zap' | 'droplet' | 'paint-bucket' | 'hammer' | 'home';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
  isServiceList?: boolean;
}
