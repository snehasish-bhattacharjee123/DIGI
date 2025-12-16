import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPortfolioItemSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio Items Routes
  
  // GET /api/portfolio - Get all portfolio items
  app.get("/api/portfolio", async (_req, res) => {
    try {
      const items = await storage.getAllPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio items" });
    }
  });

  // GET /api/portfolio/:id - Get a single portfolio item
  app.get("/api/portfolio/:id", async (req, res) => {
    try {
      const item = await storage.getPortfolioItem(req.params.id);
      if (!item) {
        return res.status(404).json({ error: "Portfolio item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio item" });
    }
  });

  // POST /api/portfolio - Create a new portfolio item
  app.post("/api/portfolio", async (req, res) => {
    try {
      const validatedData = insertPortfolioItemSchema.parse(req.body);
      const item = await storage.createPortfolioItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create portfolio item" });
    }
  });

  const contactSubmissionSchema = z.object({
    nameOrCompany: z.string().min(1),
    email: z.string().email(),
    youtubeLink: z.string().min(1),
    aboutProject: z.string().min(1),
    servicesNeeded: z.array(z.string()).min(1),
    companyCountry: z.string().optional().default(""),
    honeyEmail: z.string().optional().default(""),
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const submission = contactSubmissionSchema.parse(req.body);

      if (submission.honeyEmail.trim().length > 0) {
        return res.status(200).json({ ok: true });
      }

      console.log("Contact submission", {
        nameOrCompany: submission.nameOrCompany,
        email: submission.email,
        youtubeLink: submission.youtubeLink,
        aboutProject: submission.aboutProject,
        servicesNeeded: submission.servicesNeeded,
        companyCountry: submission.companyCountry,
      });

      return res.status(200).json({ ok: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ error: "Invalid request data", details: error.errors });
      }
      return res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  const talentRequisitionSchema = z.object({
    requesterName: z.string().min(1),
    requesterEmail: z.string().email(),
    department: z.string().optional().default(""),
    roleTitle: z.string().min(1),
    location: z.string().optional().default(""),
    employmentType: z.string().optional().default(""),
    openings: z.string().optional().default(""),
    urgency: z.string().optional().default(""),
    budgetRange: z.string().optional().default(""),
    jobDescription: z.string().min(1),
    requirements: z.string().optional().default(""),
    additionalNotes: z.string().optional().default(""),
    honeyEmail: z.string().optional().default(""),
  });

  app.post("/api/talent-requisition", async (req, res) => {
    try {
      const submission = talentRequisitionSchema.parse(req.body);

      if (submission.honeyEmail.trim().length > 0) {
        return res.status(200).json({ ok: true });
      }

      console.log("Talent requisition submission", {
        requesterName: submission.requesterName,
        requesterEmail: submission.requesterEmail,
        department: submission.department,
        roleTitle: submission.roleTitle,
        location: submission.location,
        employmentType: submission.employmentType,
        openings: submission.openings,
        urgency: submission.urgency,
        budgetRange: submission.budgetRange,
      });

      return res.status(200).json({ ok: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ error: "Invalid request data", details: error.errors });
      }
      return res.status(500).json({ error: "Failed to submit requisition" });
    }
  });

  const jobApplicationSchema = z.object({
    jobId: z.string().min(1),
    fullName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    currentLocation: z.string().optional().default(""),
    linkedInUrl: z.string().optional().default(""),
    portfolioUrl: z.string().optional().default(""),
    coverLetter: z.string().optional().default(""),
    additionalInfo: z.string().optional().default(""),
    experiences: z
      .array(
        z.object({
          company: z.string().optional().default(""),
          title: z.string().optional().default(""),
          duration: z.string().optional().default(""),
          description: z.string().optional().default(""),
        }),
      )
      .optional()
      .default([]),
    educations: z
      .array(
        z.object({
          institute: z.string().optional().default(""),
          degree: z.string().optional().default(""),
          duration: z.string().optional().default(""),
        }),
      )
      .optional()
      .default([]),
    resumeFileName: z.string().min(1),
    resumeFileType: z.string().optional().default(""),
    resumeFileSize: z.number().nonnegative(),
    resumeBase64: z.string().min(1),
    honeyEmail: z.string().optional().default(""),
  });

  app.post("/api/job-application", async (req, res) => {
    try {
      const submission = jobApplicationSchema.parse(req.body);

      if (submission.honeyEmail.trim().length > 0) {
        return res.status(200).json({ ok: true });
      }

      console.log("Job application submission", {
        jobId: submission.jobId,
        fullName: submission.fullName,
        email: submission.email,
        phone: submission.phone,
        resumeFileName: submission.resumeFileName,
        resumeFileType: submission.resumeFileType,
        resumeFileSize: submission.resumeFileSize,
        experiencesCount: submission.experiences.length,
        educationsCount: submission.educations.length,
      });

      return res.status(200).json({ ok: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ error: "Invalid request data", details: error.errors });
      }
      return res.status(500).json({ error: "Failed to submit application" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
