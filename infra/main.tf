resource "aws_s3_bucket" "uploads" {
  bucket = "norma-reg-staging-uploads"
}

resource "google_storage_bucket" "backups" {
  name     = "norma-reg-staging-backups"
  location = "EU"
}
