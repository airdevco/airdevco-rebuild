import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  content: z.string().min(1, "Content is required"),
});

type FormData = z.infer<typeof formSchema>;

interface LegalEditorProps {
  initialContent?: string;
  title: string;
  description?: string;
  onSave?: (content: string) => void;
}

export function LegalEditor({ 
  initialContent = "", 
  title, 
  description = "Edit the legal document content",
  onSave 
}: LegalEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: initialContent,
    },
  });

  const onSubmit = (data: FormData) => {
    try {
      onSave?.(data.content);
      setIsEditing(false);
      toast.success("Content saved successfully");
    } catch (error) {
      toast.error("Failed to save content");
    }
  };

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="space-y-4">
        <div className="prose prose-sm max-w-none">
          <div 
            className="text-sm text-muted-foreground whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: form.getValues("content") || "No content available" }}
          />
        </div>
        <Button onClick={() => setIsEditing(true)}>
          Edit Content
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{title}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your content here..."
                  className="min-h-[400px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit">Save</Button>
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}