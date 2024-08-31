export class SearchProductRequest {
  content?: string;
  categories?: string[] = [];
  diseases?: string[] = [];
  symptoms?: string[] = [];
  supports?: string[] = [];
}
