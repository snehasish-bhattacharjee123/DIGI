import { type User, type InsertUser, type PortfolioItem, type InsertPortfolioItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(id: string): Promise<PortfolioItem | undefined>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioItems: Map<string, PortfolioItem>;

  constructor() {
    this.users = new Map();
    this.portfolioItems = new Map();
    this.seedPortfolioData();
  }

  private seedPortfolioData() {
    const items: InsertPortfolioItem[] = [
      {
        title: "Pharmacy App Design",
        client: "Amazon Pharmacy",
        category: "Mobile App Design",
        imageUrl: "/assets/generated_images/Amazon_Pharmacy_app_mockup_8bf3e1d7.png",
        aspectRatio: "portrait",
      },
      {
        title: "Social Campaign",
        client: "Reddit",
        category: "Social Media",
        imageUrl: "/assets/generated_images/Reddit_campaign_creative_1b23ce70.png",
        aspectRatio: "landscape",
      },
      {
        title: "Video Production",
        client: "Pernod Ricard",
        category: "Video Production",
        imageUrl: "/assets/generated_images/Pernod_Ricard_video_production_685784cf.png",
        aspectRatio: "portrait",
      },
      {
        title: "Banking App",
        client: "Digital Banking",
        category: "FinTech Design",
        imageUrl: "/assets/generated_images/Fintech_app_design_413d4352.png",
        aspectRatio: "portrait",
      },
      {
        title: "Brand Identity",
        client: "Tech Startup",
        category: "Branding",
        imageUrl: "/assets/generated_images/Brand_identity_system_8af1f13b.png",
        aspectRatio: "landscape",
      },
      {
        title: "E-Commerce Platform",
        client: "Sustainable Goods",
        category: "Web Design",
        imageUrl: "/assets/generated_images/E-commerce_website_design_43c43606.png",
        aspectRatio: "landscape",
      },
    ];

    items.forEach((item) => {
      const id = randomUUID();
      this.portfolioItems.set(id, { ...item, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
    return this.portfolioItems.get(id);
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const item: PortfolioItem = { ...insertItem, id };
    this.portfolioItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
