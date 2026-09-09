import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { posts, Post as PostData } from '../../generated/posts';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.html',
  styleUrl: './post.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Post {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly post: PostData | null;
  protected readonly body: SafeHtml = '';

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = posts.find((candidate) => candidate.slug === slug) ?? null;

    if (!this.post) {
      // Unknown slug: Cloudflare serves index.html for anything it cannot find, so we
      // land here client-side and send the reader back to the front page.
      this.router.navigateByUrl('/');
      return;
    }

    // The HTML comes from our own markdown, compiled during the build. Angular's
    // sanitizer would strip the heading ids that section links depend on.
    this.body = this.sanitizer.bypassSecurityTrustHtml(this.post.html);
  }
}
