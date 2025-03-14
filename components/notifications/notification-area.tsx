"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useNotifications } from "@/components/notifications/notification-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type Notification = {
  id: string
  title: string
  description?: string
  type?: "info" | "success" | "warning" | "error"
  duration?: number
  actionLabel?: string
  onAction?: () => void
}

export function NotificationArea() {
  const { notifications, removeNotification } = useNotifications()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

function NotificationItem({
  notification,
  onClose,
}: {
  notification: Notification
  onClose: () => void
}) {
  const { id, title, description, type = "info", duration = 5000, actionLabel, onAction } = notification

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-background border rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex items-start p-4 gap-2">
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <div className="font-medium">{title}</div>
            {type !== "info" && (
              <Badge variant={type === "success" ? "default" : type === "warning" ? "secondary" : "destructive"}>
                {type}
              </Badge>
            )}
          </div>
          {description && <div className="text-sm text-muted-foreground">{description}</div>}
          {actionLabel && (
            <Button
              variant="link"
              size="sm"
              className="px-0 h-auto font-normal"
              onClick={() => {
                onAction?.()
                onClose()
              }}
            >
              {actionLabel}
            </Button>
          )}
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="h-1 bg-muted w-full overflow-hidden">
        <div
          className={`h-full ${
            type === "success"
              ? "bg-primary"
              : type === "warning"
                ? "bg-yellow-500"
                : type === "error"
                  ? "bg-destructive"
                  : "bg-blue-500"
          }`}
          style={{
            width: "100%",
            animation: `shrink ${duration}ms linear forwards`,
          }}
        />
      </div>
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </motion.div>
  )
}

