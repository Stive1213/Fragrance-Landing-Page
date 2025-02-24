$imageUrls = @(
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=800&fit=crop", # Gold and black perfume bottle
    "https://images.unsplash.com/photo-1592945403244-b3faa72a6169?w=800&h=800&fit=crop", # Blue perfume bottle
    "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&h=800&fit=crop", # Luxury gold bottle
    "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800&h=800&fit=crop", # Brown elegant bottle
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop", # Pink floral perfume
    "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&h=800&fit=crop"  # Yellow citrus perfume
)

# Create assets directory if it doesn't exist
if (!(Test-Path -Path "assets")) {
    New-Item -ItemType Directory -Path "assets"
}

# Download hero background
$heroUrl = "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1920&q=85"
Write-Host "Downloading hero background..."
Invoke-WebRequest -Uri $heroUrl -OutFile "assets/hero-bg.jpg"

# Download perfume images
Write-Host "Downloading product images..."
for ($i = 0; $i -lt $imageUrls.Count; $i++) {
    $url = $imageUrls[$i]
    $outputPath = "assets/perfume$($i+1).jpg"
    Write-Host "Downloading $outputPath..."
    Invoke-WebRequest -Uri $url -OutFile $outputPath
}
