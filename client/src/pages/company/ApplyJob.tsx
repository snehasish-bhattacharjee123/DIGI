import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useRoute } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Plus, Trash2 } from "lucide-react";

type SubmitStatus = "idle" | "success" | "error";

type Experience = {
  company: string;
  title: string;
  duration: string;
  description: string;
};

type Education = {
  institute: string;
  degree: string;
  duration: string;
};

type JobApplicationFormData = {
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  linkedInUrl: string;
  portfolioUrl: string;
  coverLetter: string;
  additionalInfo: string;
  experiences: Experience[];
  educations: Education[];
  resumeFileName: string;
  resumeFileType: string;
  resumeFileSize: number;
  resumeBase64: string;
  honeyEmail: string;
};

const inputClassName =
  "w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900";

const textareaClassName =
  "w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900 resize-none";

function toBase64DataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export default function ApplyJob() {
  const [match, params] = useRoute("/careers/applyjob/:jobId");
  const jobId = match ? params?.jobId || "" : "";

  const allowedExtensions = useMemo(
    () => [
      "doc",
      "docx",
      "pdf",
      "rtf",
      "odt",
      "txt",
      "htm",
      "html",
      "docm",
      "dotm",
      "dot",
      "dotx",
    ],
    [],
  );

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);

  const [formData, setFormData] = useState<JobApplicationFormData>({
    jobId: jobId || "63803",
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    linkedInUrl: "",
    portfolioUrl: "",
    coverLetter: "",
    additionalInfo: "",
    experiences: [],
    educations: [],
    resumeFileName: "",
    resumeFileType: "",
    resumeFileSize: 0,
    resumeBase64: "",
    honeyEmail: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const onTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { company: "", title: "", duration: "", description: "" },
      ],
    }));
  };

  const updateExperience = (index: number, key: keyof Experience, value: string) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp, i) =>
        i === index ? { ...exp, [key]: value } : exp,
      ),
    }));
  };

  const removeExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      educations: [...prev.educations, { institute: "", degree: "", duration: "" }],
    }));
  };

  const updateEducation = (index: number, key: keyof Education, value: string) => {
    setFormData((prev) => ({
      ...prev,
      educations: prev.educations.map((edu, i) =>
        i === index ? { ...edu, [key]: value } : edu,
      ),
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      educations: prev.educations.filter((_, i) => i !== index),
    }));
  };

  const onResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeError(null);
    setResumeFile(null);

    if (!file) return;

    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!allowedExtensions.includes(ext)) {
      setResumeError(`Unsupported file type. Allowed: ${allowedExtensions.join(", ")}`);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setResumeError("Resume size should be smaller than 10 MB");
      return;
    }

    setResumeFile(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resumeFile) {
      setResumeError("Please upload the resume");
      return;
    }

    setResumeError(null);
    setIsSubmitting(true);

    try {
      const dataUrl = await toBase64DataUrl(resumeFile);

      const payload: JobApplicationFormData = {
        ...formData,
        jobId: formData.jobId || jobId || "63803",
        resumeFileName: resumeFile.name,
        resumeFileType: resumeFile.type,
        resumeFileSize: resumeFile.size,
        resumeBase64: dataUrl,
      };

      const res = await fetch("/api/job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
        return;
      }

      setSubmitStatus("success");
      setResumeFile(null);
      setFormData({
        jobId: formData.jobId || jobId || "63803",
        fullName: "",
        email: "",
        phone: "",
        currentLocation: "",
        linkedInUrl: "",
        portfolioUrl: "",
        coverLetter: "",
        additionalInfo: "",
        experiences: [],
        educations: [],
        resumeFileName: "",
        resumeFileType: "",
        resumeFileSize: 0,
        resumeBase64: "",
        honeyEmail: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Apply for this job | DIGITELLER CREATIVE</title>
        <meta name="description" content="Apply online for open roles." />
      </Helmet>

      <div className="min-h-screen bg-brand-beige-100">
        <Navigation />

        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <a
                href={jobId ? `/careers/jobdetails/${jobId}` : "/join-us"}
                className="inline-flex items-center text-sm font-semibold text-brand-blue-900 hover:text-brand-orange-500 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to job details
              </a>

              <h1 className="text-4xl font-bold text-brand-blue-900 mt-5">Apply for this job</h1>
              <p className="text-brand-gray-600 mt-2">
                Upload resume to auto-fill (optional) — max 10MB.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl border-2 border-brand-gray-200 p-8">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div>
                      <label className="block text-sm font-semibold text-brand-blue-900 mb-3">
                        Upload Resume/CV <span className="text-red-500">*</span>
                      </label>
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        <label className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-white hover:brightness-95 transition-colors cursor-pointer">
                          <Upload className="w-4 h-4" />
                          Choose file
                          <input
                            type="file"
                            className="hidden"
                            onChange={onResumeChange}
                            accept={allowedExtensions.map((e) => `.${e}`).join(",")}
                          />
                        </label>
                        <div className="text-sm text-brand-gray-600">
                          {resumeFile ? resumeFile.name : "No file selected"}
                        </div>
                      </div>
                      {resumeError && <div className="mt-3 text-sm text-red-600">{resumeError}</div>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                          Full name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={onTextChange}
                          required
                          placeholder="Enter your full name"
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={onTextChange}
                          required
                          placeholder="Enter your email"
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={onTextChange}
                          required
                          placeholder="Enter your phone"
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="currentLocation" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                          Current location
                        </label>
                        <input
                          id="currentLocation"
                          name="currentLocation"
                          type="text"
                          value={formData.currentLocation}
                          onChange={onTextChange}
                          placeholder="City, Country"
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="linkedInUrl" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                          LinkedIn URL
                        </label>
                        <input
                          id="linkedInUrl"
                          name="linkedInUrl"
                          type="url"
                          value={formData.linkedInUrl}
                          onChange={onTextChange}
                          placeholder="https://linkedin.com/in/..."
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="portfolioUrl" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                          Portfolio URL
                        </label>
                        <input
                          id="portfolioUrl"
                          name="portfolioUrl"
                          type="url"
                          value={formData.portfolioUrl}
                          onChange={onTextChange}
                          placeholder="https://..."
                          className={inputClassName}
                        />
                      </div>
                    </div>

                    <div className="border-t border-brand-gray-200 pt-8">
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <h2 className="text-xl font-bold text-brand-blue-900">Experience details</h2>
                        <Button type="button" onClick={addExperience} className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white">
                          <Plus className="w-4 h-4 mr-2" />
                          Add experience
                        </Button>
                      </div>

                      {formData.experiences.length === 0 && (
                        <p className="text-sm text-brand-gray-600">No experience entries added.</p>
                      )}

                      <div className="space-y-8">
                        {formData.experiences.map((exp, index) => (
                          <div key={index} className="rounded-2xl bg-brand-beige-100 border-2 border-brand-gray-200 p-6">
                            <div className="flex items-center justify-between gap-4 mb-5">
                              <h3 className="text-lg font-bold text-brand-blue-900">Experience #{index + 1}</h3>
                              <button
                                type="button"
                                onClick={() => removeExperience(index)}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Remove
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Company</label>
                                <input
                                  type="text"
                                  value={exp.company}
                                  onChange={(e) => updateExperience(index, "company", e.target.value)}
                                  placeholder="Company name"
                                  className={inputClassName}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Title</label>
                                <input
                                  type="text"
                                  value={exp.title}
                                  onChange={(e) => updateExperience(index, "title", e.target.value)}
                                  placeholder="Role title"
                                  className={inputClassName}
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Duration</label>
                                <input
                                  type="text"
                                  value={exp.duration}
                                  onChange={(e) => updateExperience(index, "duration", e.target.value)}
                                  placeholder="e.g. Jan 2023 – Present"
                                  className={inputClassName}
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Description</label>
                                <textarea
                                  rows={3}
                                  value={exp.description}
                                  onChange={(e) => updateExperience(index, "description", e.target.value)}
                                  placeholder="What did you work on?"
                                  className={textareaClassName}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-brand-gray-200 pt-8">
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <h2 className="text-xl font-bold text-brand-blue-900">Education details</h2>
                        <Button type="button" onClick={addEducation} className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white">
                          <Plus className="w-4 h-4 mr-2" />
                          Add education
                        </Button>
                      </div>

                      {formData.educations.length === 0 && (
                        <p className="text-sm text-brand-gray-600">No education entries added.</p>
                      )}

                      <div className="space-y-8">
                        {formData.educations.map((edu, index) => (
                          <div key={index} className="rounded-2xl bg-brand-beige-100 border-2 border-brand-gray-200 p-6">
                            <div className="flex items-center justify-between gap-4 mb-5">
                              <h3 className="text-lg font-bold text-brand-blue-900">Education #{index + 1}</h3>
                              <button
                                type="button"
                                onClick={() => removeEducation(index)}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Remove
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Institute</label>
                                <input
                                  type="text"
                                  value={edu.institute}
                                  onChange={(e) => updateEducation(index, "institute", e.target.value)}
                                  placeholder="College / University"
                                  className={inputClassName}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Degree</label>
                                <input
                                  type="text"
                                  value={edu.degree}
                                  onChange={(e) => updateEducation(index, "degree", e.target.value)}
                                  placeholder="Degree"
                                  className={inputClassName}
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Duration</label>
                                <input
                                  type="text"
                                  value={edu.duration}
                                  onChange={(e) => updateEducation(index, "duration", e.target.value)}
                                  placeholder="e.g. 2018 – 2022"
                                  className={inputClassName}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-brand-gray-200 pt-8">
                      <h2 className="text-xl font-bold text-brand-blue-900 mb-6">Additional information</h2>

                      <div className="space-y-8">
                        <div>
                          <label htmlFor="coverLetter" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                            Cover letter
                          </label>
                          <textarea
                            id="coverLetter"
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={onTextChange}
                            rows={5}
                            placeholder="Tell us why you’re a great fit"
                            className={textareaClassName}
                          />
                        </div>

                        <div>
                          <label htmlFor="additionalInfo" className="block text-sm font-semibold text-brand-blue-900 mb-3">
                            Anything else?
                          </label>
                          <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={onTextChange}
                            rows={3}
                            placeholder="Links, notes, availability, etc."
                            className={textareaClassName}
                          />
                        </div>
                      </div>
                    </div>

                    <input
                      name="honeyEmail"
                      value={formData.honeyEmail}
                      onChange={onTextChange}
                      type="text"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="new-password"
                    />

                    {submitStatus === "success" && (
                      <div className="text-green-600 text-sm">Thank you! Your application has been submitted.</div>
                    )}

                    {submitStatus === "error" && (
                      <div className="text-red-600 text-sm">
                        There was an error submitting your application. Please try again.
                      </div>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-full bg-brand-orange px-12 py-3 text-sm font-semibold text-white transition-colors hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Submit application"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white rounded-2xl border-2 border-white/10 p-8 sticky top-28">
                  <h2 className="text-2xl font-bold mb-4">Good to know</h2>
                  <ul className="space-y-3 text-brand-beige-100/90">
                    <li>Resume file types supported: {allowedExtensions.join(", ")}</li>
                    <li>Max resume size: 10MB</li>
                    <li>We’ll reach out if your profile matches the role.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
