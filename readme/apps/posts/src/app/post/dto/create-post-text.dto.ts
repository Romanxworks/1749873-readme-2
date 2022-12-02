export class CreatePostTextDto {
    public userId!: string;
    public tags: string[];
    public title: string;
    public preview: string;
    public content: string;

}