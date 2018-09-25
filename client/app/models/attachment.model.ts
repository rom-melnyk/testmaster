export interface AttachmentModel {
  name: string;
  type: 'text' | 'image' | 'other';
  imageUrl: string;
  date: string;
}
