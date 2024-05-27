import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ProjectModal({ open, setOpen, project }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="dark:bg-card-gray">
        <DialogHeader>
          <h2>{project.name}</h2>
          <DialogDescription>
            {project.longDescription}
          </DialogDescription>
        </DialogHeader>
        <div>hi</div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectModal;
