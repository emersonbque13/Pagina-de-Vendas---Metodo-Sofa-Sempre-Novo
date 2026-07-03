/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  value: string;
  isFree: boolean;
  accelerator: string;
}

export interface CourseModule {
  number: number;
  title: string;
  summary: string;
  benefit: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  text: string;
  rating: number;
  date: string;
  hasSofaPhoto?: boolean;
  sofaPhotoBefore?: string;
  sofaPhotoAfter?: string;
}
