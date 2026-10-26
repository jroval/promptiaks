"""Convierte una imagen a WEBP para la galería.

Uso: python convert_image.py <origen> <destino.webp> [--max 1500] [--quality 85]

Reduce la imagen para que su lado largo no pase de --max, la guarda en WEBP
y avisa si la proporción se aleja de 2:3. No recorta.
"""
import argparse
import os
import sys

from PIL import Image, ImageOps

TARGET_RATIO = 2 / 3


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser()
    parser.add_argument("src")
    parser.add_argument("dst")
    parser.add_argument("--max", type=int, default=1500)
    parser.add_argument("--quality", type=int, default=85)
    args = parser.parse_args()

    if not args.dst.lower().endswith(".webp"):
        sys.exit("El destino debe terminar en .webp")

    with Image.open(args.src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
        orig_size = im.size
        im.thumbnail((args.max, args.max), Image.LANCZOS)
        os.makedirs(os.path.dirname(args.dst) or ".", exist_ok=True)
        im.save(args.dst, "WEBP", quality=args.quality, method=6)

    w, h = im.size
    kb = os.path.getsize(args.dst) // 1024
    print(f"{args.dst}: {orig_size[0]}x{orig_size[1]} -> {w}x{h}, {kb} KB")

    ratio = w / h
    if abs(ratio - TARGET_RATIO) / TARGET_RATIO > 0.05:
        print(f"AVISO: proporción {ratio:.3f} (2:3 = {TARGET_RATIO:.3f}). "
              "La tarjeta la mostrará entera con fondo difuminado; "
              "usa imageFit/imagePosition si debe llenarla.")


if __name__ == "__main__":
    main()
