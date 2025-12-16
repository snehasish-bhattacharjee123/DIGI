import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type SubmitStatus = "idle" | "success" | "error";

type TalentRequisitionFormData = {
  requesterName: string;
  requesterEmail: string;
  department: string;
  roleTitle: string;
  location: string;
  employmentType: string;
  openings: string;
  urgency: string;
  budgetRange: string;
  jobDescription: string;
  requirements: string;
  additionalNotes: string;
  honeyEmail: string;
};

const inputClassName =
  "w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900";

const textareaClassName =
  "w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900 resize-none";

export default function TalentRequisition() {
  const [formData, setFormData] = useState<TalentRequisitionFormData>({
    requesterName: "",
    requesterEmail: "",
    department: "",
    roleTitle: "",
    location: "",
    employmentType: "Full-time",
    openings: "1",
    urgency: "Normal",
    budgetRange: "",
    jobDescription: "",
    requirements: "",
    additionalNotes: "",
    honeyEmail: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const onTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/talent-requisition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
        return;
      }

      setSubmitStatus("success");
      setFormData({
        requesterName: "",
        requesterEmail: "",
        department: "",
        roleTitle: "",
        location: "",
        employmentType: "Full-time",
        openings: "1",
        urgency: "Normal",
        budgetRange: "",
        jobDescription: "",
        requirements: "",
        additionalNotes: "",
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
        <title>Talent Requisition | DIGITELLER CREATIVE</title>
        <meta name="description" content="Submit a talent requisition for hiring." />
      </Helmet>

      <div className="min-h-screen bg-brand-beige-100">
        <Navigation />

        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h1 className="text-4xl font-bold text-brand-blue-900">Talent requisition form</h1>
              <p className="text-brand-gray-600 mt-2">
                Submit a new hiring request with role details and requirements.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl border-2 border-brand-gray-200 p-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">
                      Requester name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="requesterName"
                      value={formData.requesterName}
                      onChange={onTextChange}
                      required
                      placeholder="Enter your name"
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">
                      Requester email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="requesterEmail"
                      type="email"
                      value={formData.requesterEmail}
                      onChange={onTextChange}
                      required
                      placeholder="Enter your email"
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">
                      Department
                    </label>
                    <input
                      name="department"
                      value={formData.department}
                      onChange={onTextChange}
                      placeholder="e.g. Production"
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">
                      Role title <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="roleTitle"
                      value={formData.roleTitle}
                      onChange={onTextChange}
                      required
                      placeholder="e.g. Video Editor"
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Location</label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={onTextChange}
                      placeholder="e.g. Kolkata / Remote"
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Employment type</label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={onTextChange}
                      className="w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 focus:outline-none focus:border-brand-blue-900"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">No. of openings</label>
                    <input
                      name="openings"
                      type="number"
                      min={"1"}
                      value={formData.openings}
                      onChange={onTextChange}
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Urgency</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={onTextChange}
                      className="w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 focus:outline-none focus:border-brand-blue-900"
                    >
                      <option value="Normal">Normal</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Budget range</label>
                    <input
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={onTextChange}
                      placeholder="e.g. ₹6–8 LPA"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-blue-900 mb-3">
                    Job description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={onTextChange}
                    required
                    rows={6}
                    placeholder="Describe the role and responsibilities"
                    className={textareaClassName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Requirements</label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={onTextChange}
                    rows={5}
                    placeholder="Skills, tools, years of experience, etc."
                    className={textareaClassName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-blue-900 mb-3">Additional notes</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={onTextChange}
                    rows={3}
                    placeholder="Any extra context for the hiring team"
                    className={textareaClassName}
                  />
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
                  <div className="text-green-600 text-sm">Requisition submitted successfully.</div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">There was an error submitting the requisition.</div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-brand-orange px-12 py-3 text-sm font-semibold text-white transition-colors hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
