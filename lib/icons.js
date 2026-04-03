import {
  Code2, Shield, Server, Users, Heart, HandHeart, Star, ThumbsUp, Target,
  FlaskConical, Building2, Sparkles, Unlock, Award, Coins, CheckCircle,
  Rocket, Globe, Zap
} from 'lucide-react'

const iconMap = {
  Code2, Shield, Server, Users, Heart, HandHeart, Star, ThumbsUp, Target,
  FlaskConical, Building2, Sparkles, Unlock, Award, Coins, CheckCircle,
  Rocket, Globe, Zap
}

export function getIcon(name, className = 'w-8 h-8') {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} />
}
