import { users, contacts, newsletters, type User, type InsertUser, type Contact, type InsertContact, type Newsletter, type InsertNewsletter } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getContacts(): Promise<Contact[]>;
  getNewsletters(): Promise<Newsletter[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    try {
      const [newsletter] = await db
        .insert(newsletters)
        .values(insertNewsletter)
        .returning();
      return newsletter;
    } catch (error: any) {
      if (error.code === '23505') { // Unique constraint violation
        throw new Error("Email already subscribed");
      }
      throw error;
    }
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return await db.select().from(newsletters).orderBy(newsletters.createdAt);
  }
}

export const storage = new DatabaseStorage();
