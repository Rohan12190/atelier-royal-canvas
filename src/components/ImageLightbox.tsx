import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollectionItem {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  items: CollectionItem[];
  onNext: () => void;
  onPrevious: () => void;
}

const ImageLightbox = ({
  isOpen,
  onClose,
  currentIndex,
  items,
  onNext,
  onPrevious,
}: ImageLightboxProps) => {
  if (!items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] bg-black/95 border-none p-0">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          <Button
            onClick={onPrevious}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Next Button */}
          <Button
            onClick={onNext}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Content */}
          <div className="w-full h-full flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Image */}
            <div className="flex-1 h-full flex items-center justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="lg:w-96 text-white space-y-4">
              <h2 className="font-serif text-4xl font-bold">{currentItem.name}</h2>
              <p className="text-white/80 leading-relaxed">{currentItem.description}</p>
              <p className="text-sm text-white/60 uppercase tracking-wider">
                {currentIndex + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
