import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 border border-border rounded-lg bg-card shadow-sm", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption: "flex justify-start text-left mb-3",
        caption_label: "text-base font-bold text-foreground normal-case",
        table: "w-full border-collapse",
        head_row: "w-full mb-1",
        head_cell: "text-foreground font-bold text-sm w-9 h-9 text-center",
        row: "w-full",
        cell: "text-center text-sm p-0.5 relative w-9 h-9",
        day: cn(
          "h-9 w-9 p-0 font-normal rounded-full hover:bg-accent/50 transition-colors"
        ),
        day_range_end: "day-range-end",
        day_selected: "",
        day_today: "",
        day_outside: "day-outside text-muted-foreground/40 opacity-50",
        day_disabled: "text-muted-foreground/30 opacity-30 cursor-not-allowed",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
