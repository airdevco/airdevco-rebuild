import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  isEditing: boolean;
}

export function CategoriesForm() {
  const [categories, setCategories] = useState<Category[]>([]);
  const editInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Add a new category
  const addCategory = () => {
    const newCategory: Category = {
      id: Date.now().toString(),
      name: "New Category",
      isEditing: true,
    };
    setCategories([...categories, newCategory]);
    
    // Focus the input after state update
    setTimeout(() => {
      editInputRefs.current[newCategory.id]?.focus();
      editInputRefs.current[newCategory.id]?.select();
    }, 0);
  };

  // Start editing a category
  const startEditing = (id: string) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, isEditing: true } : cat
    ));
    
    setTimeout(() => {
      editInputRefs.current[id]?.focus();
      editInputRefs.current[id]?.select();
    }, 0);
  };

  // Save category name
  const saveCategory = (id: string, newName: string) => {
    if (newName.trim()) {
      setCategories(categories.map(cat => 
        cat.id === id ? { ...cat, name: newName.trim(), isEditing: false } : cat
      ));
    } else {
      // If empty, remove the category
      deleteCategory(id);
    }
  };

  // Cancel editing
  const cancelEditing = (id: string) => {
    const category = categories.find(cat => cat.id === id);
    if (category?.name === "New Category") {
      // Remove if it's a new category that wasn't saved
      setCategories(categories.filter(cat => cat.id !== id));
    } else {
      setCategories(categories.map(cat => 
        cat.id === id ? { ...cat, isEditing: false } : cat
      ));
    }
  };

  // Delete category with undo
  const deleteCategory = (id: string) => {
    const category = categories.find(cat => cat.id === id);
    if (!category) return;

    const categoryIndex = categories.findIndex(cat => cat.id === id);
    setCategories(categories.filter(cat => cat.id !== id));

    toast(`Deleted "${category.name}"`, {
      action: {
        label: "Undo",
        onClick: () => {
          setCategories(prev => {
            const newCategories = [...prev];
            newCategories.splice(categoryIndex, 0, category);
            return newCategories;
          });
        },
      },
    });
  };

  // Handle key press for inline editing
  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = editInputRefs.current[id];
      if (input) {
        saveCategory(id, input.value);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      cancelEditing(id);
    }
  };

  const CategoryItem = ({ category }: { category: Category }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!category.isEditing) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
          const input = editInputRefs.current[category.id];
          if (input) {
            saveCategory(category.id, input.value);
          }
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [category.isEditing, category.id]);

    return (
      <div
        ref={itemRef}
        className="group flex items-center justify-between px-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
      >
        {category.isEditing ? (
          <Input
            ref={(el) => { editInputRefs.current[category.id] = el; }}
            defaultValue={category.name}
            className="h-8 flex-1"
            onKeyDown={(e) => handleKeyDown(e, category.id)}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div
            className="flex-1 cursor-pointer py-1"
            onClick={() => startEditing(category.id)}
          >
            <span className="text-sm">{category.name}</span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-6 w-6 transition-opacity",
            category.isEditing 
              ? "opacity-0 pointer-events-none" 
              : "opacity-0 group-hover:opacity-100"
          )}
          onClick={() => deleteCategory(category.id)}
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    );
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <p className="text-sm text-muted-foreground mb-4">
        No categories yet. Create your first category to get started.
      </p>
      <Button onClick={addCategory} size="sm">
        <Plus className="mr-2 h-4 w-4" />
        Add category
      </Button>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Categories</CardTitle>
            <CardDescription>
              Manage categories for organizing your workspace
            </CardDescription>
          </div>
          {categories.length > 0 && (
            <Button onClick={addCategory} size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add category
            </Button>
          )}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        {categories.length === 0 ? (
          <EmptyState />
        ) : (
          <ScrollArea className={categories.length > 10 ? "h-[400px]" : ""}>
            <div className="space-y-1">
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}