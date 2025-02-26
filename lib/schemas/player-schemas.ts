import { z } from "zod";

export const PlayerSummarySchema = z.object({
  id: z.string().uuid(),
  fullName: z.string(),
  nationalCode: z.string(),
  dateOfBirth: z.string(),
  gender: z.string(),
  MilitaryServiceStatus: z.string(),
  Position: z.string(),
});

export type PlayerSummary = z.infer<typeof PlayerSummarySchema>;