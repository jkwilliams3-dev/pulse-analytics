export interface AIResponse {
  patterns: string[];
  response: string;
}

export const aiResponses: AIResponse[] = [
  {
    patterns: ['revenue', 'growth', 'trend'],
    response:
      "Revenue has grown impressively to $142.8K in December, up 12.4% year-over-year. The 12-month trend shows consistent growth with a seasonal dip in July ($119.8K) — likely tied to mid-summer slowdowns — before recovering strongly through Q4. Compared to last year's $131.2K December figure, the business has added over $11K in monthly recurring revenue.",
  },
  {
    patterns: ['traffic', 'source', 'channel'],
    response:
      "Your top traffic source is Direct with 42,300 visitors, followed closely by Organic Search at 38,700. Social Media contributes 24,100 visitors while Referral and Email bring in 18,900 and 12,600 respectively. Organic Search is your most cost-efficient channel — strengthening SEO content could push it past Direct as the primary source.",
  },
  {
    patterns: ['device', 'mobile', 'desktop'],
    response:
      "Desktop remains dominant at 58% of sessions, with Mobile at 32% and Tablet at 10%. The 32% mobile share suggests a significant portion of your audience is on smartphones, so ensuring your checkout and onboarding flows are fully optimized for mobile could meaningfully lift your 3.8% conversion rate.",
  },
  {
    patterns: ['conversion', 'rate'],
    response:
      "Your conversion rate of 3.8% is down 0.3 percentage points from last month, which on 136,600 total monthly visitors represents roughly 410 fewer conversions. Consider A/B testing your landing page CTA placement, reducing form friction on signup, and targeting the high-intent Organic Search segment with personalized offers to recover and exceed prior levels.",
  },
  {
    patterns: ['user', 'active', 'retention'],
    response:
      "Active users stand at 8,294, up 5.2% month-over-month — a healthy growth signal. Paired with your $67.50 average order value and 3.8% conversion rate, each new active user represents meaningful incremental revenue. Focus on onboarding quality and feature adoption to improve retention and grow lifetime value per user.",
  },
  {
    patterns: ['predict', 'forecast', 'next month'],
    response:
      "Based on your 12-month trajectory and the current 12.4% YoY growth rate, January revenue is projected to land between $151K and $156K. The post-holiday slowdown may temper growth slightly, but your strong Q4 momentum and growing user base ($8,294 actives) suggest the upper end of that range is achievable with focused retention campaigns.",
  },
  {
    patterns: ['compare', 'vs', 'versus'],
    response:
      "Year-over-year, every key metric is trending positively: revenue is up 12.4% ($142.8K vs $131.2K last December), active users up 5.2%, and average order value up 8.1% to $67.50. The only exception is conversion rate at -0.3%, which may reflect higher top-of-funnel traffic volume without a proportional increase in purchase intent.",
  },
  {
    patterns: ['report', 'summary', 'overview'],
    response:
      "StreamlineAI dashboard summary: Revenue at $142.8K (+12.4%), 8,294 active users (+5.2%), 3.8% conversion rate (-0.3%), and $67.50 average order value (+8.1%). Traffic is led by Direct (42.3K) and Organic Search (38.7K). Desktop drives 58% of sessions. 20 recent transactions show strong enterprise adoption with a healthy mix of SaaS and Professional tiers.",
  },
];

export const defaultResponse =
  "I can analyze your StreamlineAI dashboard data in detail. Try asking about revenue trends, traffic sources, device breakdowns, conversion rates, user growth, or ask me to predict next month's performance. I have full access to your December 2025 metrics.";

export function getAIResponse(input: string): string {
  const lowered = input.toLowerCase();
  for (const item of aiResponses) {
    if (item.patterns.some((p) => lowered.includes(p))) {
      return item.response;
    }
  }
  return defaultResponse;
}

export const conversationStarters = [
  'Analyze revenue trends',
  'Compare traffic sources',
  "Predict next month's performance",
  "What's driving user growth?",
];
