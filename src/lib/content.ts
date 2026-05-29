export const INSTAGRAM_URL = "https://www.instagram.com/jakesbroja_pft/";

export const aboutParagraphs = [
  "Performance Fitness Training and Rehabilitation was founded with the vision of raising industry standards and providing people with access to a high-quality, personalised approach to health and fitness. Established in 2015 by Jake Sbroja, an emerging coach driven by a strong passion for health, performance, and helping others, PFT was created to make a meaningful difference in people's lives through exercise.",
  "Jake Sbroja is a National-level Olympic weightlifter with tertiary qualifications in Exercise Physiology and Rehabilitation. Known for his attention to detail and commitment to achieving the best outcomes for clients, Jake uses evidence-based exercise strategies to support individuals across a wide range of needs and goals.",
  "Through Performance Fitness Training and Rehabilitation, Jake works with athletes of all levels, individuals living with disabilities, chronic health conditions, musculoskeletal injuries, as well as those simply seeking a premium, individualised service. PFT also collaborates closely with doctors, dietitians, and other allied health professionals to ensure clients receive the highest standard of care and support.",
  "Built on the belief that exercise exists on a continuum — and that everyone has the ability to improve their health, function, and performance through movement — PFT was created to empower people to move better, feel stronger, and live healthier lives.",
];

export type ServiceKey =
  | "chronic"
  | "rehab"
  | "athletic"
  | "personal"
  | "consult";

export const services: { key: ServiceKey; label: string }[] = [
  { key: "chronic", label: "Exercise for Chronic Diseases & Conditions" },
  { key: "rehab", label: "Musculoskeletal Rehabilitation" },
  { key: "athletic", label: "Athletic Development & Strength and Conditioning" },
  { key: "personal", label: "1 on 1 Personal Training" },
  { key: "consult", label: "Health Consultations" },
];

export const qualifications = [
  "Masters in Clinical Exercise Physiology",
  "Bachelor of Sport and Exercise Science",
  "Diploma in Specialist Exercise (High Performance & Special Populations)",
  "NDIS Approved Trainer",
  "Qualified ASCA Strength & Conditioning Coach",
];

export const testimonials = [
  {
    quote:
      "I am profoundly uncomfortable in a gym, yet needed help to combat wasting as a result of a chronic illness. Jake put me at ease and worked closely with me to uniformly raise my strength and improve my fitness. Jake has a genuine passion for fitness and a surprising depth of knowledge. I now consider him to be one of my specialists.",
    name: "Matthew D.",
  },
  {
    quote:
      "Jake is a great PT and my new benchmark for PT services. He's knowledgeable and supportive and has helped me rehabilitate from a significant back injury and go on to become stronger than I have been in years. His programs are responsive, personalised and well paced for busy people. Can't recommend him highly enough.",
    name: "Susan B.",
  },
  {
    quote:
      "Jake has played an instrumental role in improving my mother's safety and quality of life following her stroke, working with her to increase her strength and stability. He is compassionate, patient, and willing to continually challenge himself to benefit his clients. I am so grateful he is my mother's trainer.",
    name: "Sarah O.",
  },
  {
    quote:
      "I started with Jake to help my strength for sport. I've since left moving better, playing pain free, and feeling more athletic overall.",
    name: "Mark B.",
  },
  {
    quote:
      "Jake has helped me achieve so many strength and fitness goals and has made such a positive impact on my physical and mental wellbeing. I'm so grateful for the time and effort he's put in — I could not recommend him enough.",
    name: "Lauren M.",
  },
];

export const locations = [
  {
    label: "Kingston",
    address: "23 Kennedy St, Kingston ACT 2604",
  },
  {
    label: "Curtin",
    address: "Curtin Shops, Basement/1 Curtin Pl, Curtin ACT 2605",
  },
];

export const phone = "0452 355 811";
