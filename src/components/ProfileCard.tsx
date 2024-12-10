import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Link as LinkIcon, Github, Twitter } from "lucide-react"

export function ProfileCard() {
  return (
    <Card className="w-[440px] overflow-hidden bg-card/30 backdrop-blur-xl border-border/40">
      <div className="relative h-40">
        {/* 背景画像 */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        {/* プロフィール画像 */}
        <Avatar className="h-28 w-28 absolute -bottom-14 left-6 ring-4 ring-background shadow-xl">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>
      </div>
      
      <CardHeader className="pt-16 pb-4 space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">佐藤 明智</h2>
          <p className="text-muted-foreground">フルスタックエンジニア</p>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="rounded-full">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full">
            <Twitter className="h-4 w-4 mr-2" />
            Twitter
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>大阪府</span>
          </div>
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-4 w-4" />
            <a href="#" className="hover:text-primary transition-colors">portfolio.dev</a>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarDays className="h-4 w-4" />
            <span>2020年から活動</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            新しい技術を学ぶことが大好きなエンジニアです。
            アジャイル開発を得意としています。
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="rounded-full px-3">React</Badge>
          <Badge variant="secondary" className="rounded-full px-3">TypeScript</Badge>
          <Badge variant="secondary" className="rounded-full px-3">Node.js</Badge>
          <Badge variant="secondary" className="rounded-full px-3">Next.js</Badge>
          <Badge variant="secondary" className="rounded-full px-3">AWS</Badge>
          <Badge variant="secondary" className="rounded-full px-3">Docker</Badge>
          <Badge variant="secondary" className="rounded-full px-3">Git</Badge>
          <Badge variant="secondary" className="rounded-full px-3">GitHub</Badge>
        </div>
      </CardContent>
    </Card>
  )
}