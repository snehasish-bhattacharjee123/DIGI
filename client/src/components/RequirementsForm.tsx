import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

type SubmitStatus = "idle" | "success" | "error";

type RequirementsFormData = {
  nameOrCompany: string;
  email: string;
  youtubeLink: string;
  aboutProject: string;
  servicesNeeded: string[];
  companyCountry: string;
  honeyEmail: string;
};

type RequirementsFormProps = {
  className?: string;
};

export function RequirementsForm({ className }: RequirementsFormProps) {
  const serviceOptions = useMemo(
    () => [
      "Reaction Video Editing",
      "Podcast Video Editing",
      "Thumbnail Designing",
      "Shorts/Reel Video Editing",
      "Youtube Channel Management",
    ],
    [],
  );

  const [formData, setFormData] = useState<RequirementsFormData>({
    nameOrCompany: "",
    email: "",
    youtubeLink: "",
    aboutProject: "",
    servicesNeeded: [],
    companyCountry: "",
    honeyEmail: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [servicesError, setServicesError] = useState<string | null>(null);

  const onTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const hasService = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: hasService
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.servicesNeeded.length === 0) {
      setServicesError("Please select at least one service.");
      return;
    }

    setServicesError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
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
        nameOrCompany: "",
        email: "",
        youtubeLink: "",
        aboutProject: "",
        servicesNeeded: [],
        companyCountry: "",
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
    <div className={className}>
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-blue-900">
          Work with our{" "}
          <span className="relative inline-block">
            A-team.
            <span className="absolute left-0 -bottom-1 h-2 w-full bg-brand-orange/60" />
          </span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <label
              htmlFor="nameOrCompany"
              className="block text-sm font-semibold text-brand-blue-900 mb-3"
            >
              Your Name/Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="nameOrCompany"
              name="nameOrCompany"
              type="text"
              value={formData.nameOrCompany}
              onChange={onTextChange}
              required
              placeholder="Enter Your Name/Company Name"
              className="w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-brand-blue-900 mb-3"
            >
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onTextChange}
              required
              placeholder="Enter Your Email"
              className="w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="youtubeLink"
              className="block text-sm font-semibold text-brand-blue-900 mb-3"
            >
              YouTube Channel Link <span className="text-red-500">*</span>
            </label>
            <input
              id="youtubeLink"
              name="youtubeLink"
              type="text"
              value={formData.youtubeLink}
              onChange={onTextChange}
              required
              placeholder="Enter Link Here"
              className="w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="aboutProject"
            className="block text-sm font-semibold text-brand-blue-900 mb-3"
          >
            About Your Project <span className="text-red-500">*</span>
          </label>
          <textarea
            id="aboutProject"
            name="aboutProject"
            value={formData.aboutProject}
            onChange={onTextChange}
            required
            rows={4}
            placeholder="Tell Us About Your Project"
            className="w-full border-0 border-b border-brand-blue-900/25 bg-transparent px-0 py-2 text-sm text-brand-blue-900 placeholder:text-brand-blue-900/40 focus:outline-none focus:border-brand-blue-900 resize-none"
          />
        </div>

        <fieldset>
          <legend className="block text-sm font-semibold text-brand-blue-900 mb-4">
            I Need <span className="text-red-500">*</span>
          </legend>

          <div className="flex flex-wrap gap-3">
            {serviceOptions.map((service) => {
              const checked = formData.servicesNeeded.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  aria-pressed={checked}
                  className={
                    checked
                      ? "rounded-full border border-brand-orange bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition-colors"
                      : "rounded-full border border-brand-blue-900/25 bg-white px-5 py-2 text-sm font-semibold text-brand-blue-900 transition-colors hover:border-brand-blue-900/50"
                  }
                >
                  {service}
                </button>
              );
            })}
          </div>

          {servicesError && (
            <div className="mt-3 text-sm text-red-600">{servicesError}</div>
          )}
        </fieldset>

        <input
          name="companyCountry"
          value={formData.companyCountry}
          onChange={onTextChange}
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

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
          <div className="text-green-600 text-sm">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-red-600 text-sm">
            There was an error sending your message. Please try again.
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-brand-orange px-12 py-3 text-sm font-semibold text-white transition-colors hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
