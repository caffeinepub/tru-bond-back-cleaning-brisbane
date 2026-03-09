import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitForm } from "@/hooks/useQueries";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "General Bond Clean",
  "Kitchen Deep Clean",
  "Bathroom Cleaning",
  "Carpet Steam Cleaning",
  "Window Cleaning",
  "Full Bond Clean Package",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  propertyAddress: string;
  preferredDate: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  propertyAddress: "",
  preferredDate: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const { mutate: submitForm, isPending } = useSubmitForm();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (formError) setFormError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.serviceType) return "Please select a service type.";
    if (!form.propertyAddress.trim())
      return "Please enter your property address.";
    if (!form.preferredDate) return "Please select a preferred date.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setFormError(error);
      return;
    }

    // Build the mailto body (email not visible in UI)
    const subject = encodeURIComponent(
      `Bond Clean Quote Request - ${form.serviceType} - ${form.propertyAddress}`,
    );
    const body = encodeURIComponent(
      `New Bond Clean Quote Request from Tru Bond Cleaning Brisbane Website\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Type: ${form.serviceType}\nProperty Address: ${form.propertyAddress}\nPreferred Date: ${form.preferredDate}\nMessage: ${form.message || "No additional message"}\n\n--\nSent from trubondcleaningbrisbane.com`,
    );

    // Open mailto from customer's email client
    const recipient = ["humptydumpty", "bondcleaning", "@", "gmail.com"].join(
      "",
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Also save to backend
    submitForm(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        serviceType: form.serviceType,
        propertyAddress: form.propertyAddress,
        preferredDate: form.preferredDate,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
          toast.success("Your quote request has been sent!");
        },
        onError: () => {
          // Still show success since the mailto was triggered
          setSubmitted(true);
          setForm(initialForm);
        },
      },
    );
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <SEO
        title="Contact Tru Bond Cleaning Brisbane | Get a Free Bond Clean Quote | Call 0488841883"
        description="Contact Tru Bond Cleaning Brisbane for a free bond cleaning quote. Fill in our quick form or call 0488841883. We respond within 1 hour during business hours. All Brisbane suburbs."
        keywords="contact bond cleaning Brisbane, free bond clean quote Brisbane, book bond cleaning Brisbane, end of lease cleaning quote Brisbane"
        canonical="https://trubondcleaningbrisbane.com/contact"
        ogImage="/assets/generated/bond-refund-happy-tenants-brisbane.dim_800x500.jpg"
      />

      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-[oklch(0.15_0.06_210)] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/assets/generated/bond-refund-happy-tenants-brisbane.dim_800x500.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[oklch(0.52_0.16_155_/_0.2)] text-[oklch(0.82_0.1_155)]">
            <Sparkles size={12} />
            Free Quote
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Get Your Free Bond Clean Quote
          </h1>
          <p className="text-[oklch(0.75_0.04_210)] text-lg max-w-2xl mx-auto">
            Fill in the form below or give us a call. We respond within 1 hour
            during business hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div>
                <span className="section-tag">
                  <Sparkles size={12} />
                  Contact Info
                </span>
                <h2 className="font-display text-2xl font-extrabold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We make it easy to get a quote. Call us, message us on
                  WhatsApp, or fill in the form. We will get back to you fast.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:0488841883"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 bg-[oklch(0.38_0.12_193_/_0.1)] rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[oklch(0.38_0.12_193)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Call Us
                    </div>
                    <div className="text-base font-bold text-[oklch(0.38_0.12_193)]">
                      0488 841 883
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mon–Sat 6am–8pm
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-[#25D366]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      WhatsApp
                    </div>
                    <div className="text-base font-bold text-[#25D366]">
                      0488 841 883
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Send us a message anytime
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs">
                  <div className="w-10 h-10 bg-[oklch(0.38_0.12_193_/_0.1)] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[oklch(0.38_0.12_193)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Service Area
                    </div>
                    <div className="text-sm text-muted-foreground">
                      All Brisbane suburbs and surrounds
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Including Logan, Ipswich & Redlands
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs">
                  <div className="w-10 h-10 bg-[oklch(0.38_0.12_193_/_0.1)] rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[oklch(0.38_0.12_193)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      Business Hours
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Mon–Sat: 6am–8pm
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Sunday: 8am–5pm
                    </div>
                    <div className="text-xs text-[oklch(0.52_0.16_155)] font-semibold mt-1">
                      ⚡ We respond within 1 hour
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-secondary rounded-xl p-4 space-y-2">
                <div className="font-semibold text-sm text-foreground mb-3">
                  Why Book With Us
                </div>
                {[
                  "100% Bond Back Guarantee",
                  "No hidden fees — fixed pricing",
                  "Fully insured & police checked",
                  "REIQ checklist on every clean",
                  "Free 72-hour re-clean if needed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-foreground/80"
                  >
                    <CheckCircle
                      size={13}
                      className="text-[oklch(0.52_0.16_155)] shrink-0"
                    />
                    {item}
                  </div>
                ))}
              </div>

              {/* Hero image */}
              <img
                src="/assets/generated/bond-refund-happy-tenants-brisbane.dim_800x500.jpg"
                alt="Contact Tru Bond Cleaning Brisbane - get your free bond cleaning quote today"
                className="rounded-xl shadow-card w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </aside>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 md:p-8">
                {submitted ? (
                  <div
                    data-ocid="contact.success_state"
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[oklch(0.52_0.16_155_/_0.12)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle
                        size={32}
                        className="text-[oklch(0.52_0.16_155)]"
                      />
                    </div>
                    <h2 className="font-display text-2xl font-extrabold text-foreground mb-3">
                      Quote Request Sent!
                    </h2>
                    <p className="text-muted-foreground text-base mb-6 max-w-md mx-auto">
                      Thank you! Your email client should have opened with your
                      quote request. We also received your details and will
                      contact you within 1 hour during business hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        className="bg-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.28_0.1_193)] text-white font-bold"
                        onClick={() => setSubmitted(false)}
                      >
                        Submit Another Request
                      </Button>
                      <Button asChild variant="outline">
                        <a
                          href="https://wa.me/61488841883"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp Us Instead
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="font-display text-2xl font-extrabold text-foreground mb-1">
                        Request a Free Quote
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Fill in your details below and we will get back to you
                        within 1 hour with a fixed price quote.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      {/* Name + Phone row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-sm font-semibold text-foreground"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            data-ocid="contact.name.input"
                            type="text"
                            placeholder="e.g. Sarah Johnson"
                            value={form.name}
                            onChange={(e) =>
                              handleChange("name", e.target.value)
                            }
                            required
                            autoComplete="name"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-sm font-semibold text-foreground"
                          >
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            data-ocid="contact.phone.input"
                            type="tel"
                            placeholder="e.g. 0400 123 456"
                            value={form.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            required
                            autoComplete="tel"
                            className="h-11"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-foreground"
                        >
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          data-ocid="contact.email.input"
                          type="email"
                          placeholder="e.g. sarah@example.com"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                          autoComplete="email"
                          className="h-11"
                        />
                      </div>

                      {/* Service type */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="service"
                          className="text-sm font-semibold text-foreground"
                        >
                          Service Type{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={form.serviceType}
                          onValueChange={(val) =>
                            handleChange("serviceType", val)
                          }
                        >
                          <SelectTrigger
                            id="service"
                            data-ocid="contact.service.select"
                            className="h-11"
                          >
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Property address */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="address"
                          className="text-sm font-semibold text-foreground"
                        >
                          Property Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="address"
                          data-ocid="contact.address.input"
                          type="text"
                          placeholder="e.g. 12 Smith St, Fortitude Valley QLD 4006"
                          value={form.propertyAddress}
                          onChange={(e) =>
                            handleChange("propertyAddress", e.target.value)
                          }
                          required
                          autoComplete="street-address"
                          className="h-11"
                        />
                      </div>

                      {/* Preferred date */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="date"
                          className="text-sm font-semibold text-foreground"
                        >
                          Preferred Date{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="date"
                          data-ocid="contact.date.input"
                          type="date"
                          min={today}
                          value={form.preferredDate}
                          onChange={(e) =>
                            handleChange("preferredDate", e.target.value)
                          }
                          required
                          className="h-11"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-sm font-semibold text-foreground"
                        >
                          Additional Notes{" "}
                          <span className="text-muted-foreground font-normal">
                            (optional)
                          </span>
                        </Label>
                        <Textarea
                          id="message"
                          data-ocid="contact.message.textarea"
                          placeholder="e.g. 3-bedroom house, includes carpet cleaning, pet in property..."
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          rows={4}
                          className="resize-y"
                        />
                      </div>

                      {/* Error */}
                      {formError && (
                        <div
                          data-ocid="contact.error_state"
                          className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive"
                        >
                          <AlertCircle size={16} className="shrink-0" />
                          {formError}
                        </div>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        data-ocid="contact.submit.submit_button"
                        disabled={isPending}
                        className="w-full h-12 bg-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.28_0.1_193)] text-white font-bold text-base shadow-teal"
                      >
                        {isPending ? (
                          <>
                            <Loader2 size={18} className="mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send My Free Quote Request
                            <ArrowRight size={18} className="ml-2" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, your email client will open with a
                        pre-filled quote request. We will also save your details
                        and call you back within 1 hour.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-10 bg-[oklch(0.38_0.12_193)]">
        <div className="max-w-5xl mx-auto px-4 text-white text-center">
          <p className="text-[oklch(0.88_0.06_193)] text-sm mb-2 font-medium">
            Prefer to talk? Give us a call right now.
          </p>
          <a
            href="tel:0488841883"
            className="font-display font-extrabold text-3xl md:text-4xl hover:text-[oklch(0.92_0.1_155)] transition-colors"
          >
            0488 841 883
          </a>
          <p className="text-[oklch(0.78_0.04_193)] text-xs mt-2">
            Mon–Sat 6am–8pm &nbsp;|&nbsp; Sun 8am–5pm
          </p>
        </div>
      </section>
    </>
  );
}
