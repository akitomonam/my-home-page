import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Link as LinkIcon, 
  Github, 
  Twitter, 
  Mail,
  BookOpen,
  Trophy,
  BookOpen as QiitaIcon
} from "lucide-react"

const PROFILE = {
  name: "佐藤 明智",
  role: "フルスタックエンジニア",
  location: "大阪府",
  portfolio: "portfolio.dev",
  socials: {
    github: "https://github.com/akitomonam",
    twitter: "https://x.com/AKITOMO_N4M",
    email: "mailto:akitomonam@gmail.com",
    qiita: "https://qiita.com/akitomonam"
  }
} as const;

export function ProfileCard() {
  return (
    <Card className="w-[440px] overflow-hidden bg-card/30 backdrop-blur-xl border-border/40">
      <div className="relative h-40">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <Avatar className="h-28 w-28 absolute -bottom-14 left-6 ring-4 ring-background shadow-xl">
          <AvatarImage src="https://avatars.githubusercontent.com/u/72239675?v=4" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
      </div>
      
      <CardHeader className="pt-16 pb-4 space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{PROFILE.name}</h2>
          <p className="text-muted-foreground">{PROFILE.role}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="rounded-full"
            asChild
          >
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full"
            asChild
          >
            <a href={PROFILE.socials.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full"
            asChild
          >
            <a href={PROFILE.socials.qiita} target="_blank" rel="noopener noreferrer">
              <QiitaIcon className="h-4 w-4 mr-2" />
              Qiita
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full"
            asChild
          >
            <a href={PROFILE.socials.email}>
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </a>
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{PROFILE.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-4 w-4" />
            <a href={PROFILE.portfolio} className="hover:text-primary transition-colors">portfolio.dev</a>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
           アジャイルなフルスタックエンジニアです。
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold">資格・認定</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="rounded-full px-3">基本情報技術者試験</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold">技術スタック</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full px-3">React</Badge>
            <Badge variant="secondary" className="rounded-full px-3">TypeScript</Badge>
            <Badge variant="secondary" className="rounded-full px-3">Node.js</Badge>
            <Badge variant="secondary" className="rounded-full px-3">Next.js</Badge>
            <Badge variant="secondary" className="rounded-full px-3">AWS</Badge>
            <Badge variant="secondary" className="rounded-full px-3">Docker</Badge>
            <Badge variant="secondary" className="rounded-full px-3">Kubernetes</Badge>
            <Badge variant="secondary" className="rounded-full px-3">PostgreSQL</Badge>
          </div>
        </div>

        <div className="pt-4">
          <Button className="w-full rounded-full">
            ポートフォリオを見る
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}