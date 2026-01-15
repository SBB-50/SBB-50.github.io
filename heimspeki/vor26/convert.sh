#!/bin/bash

input_extension="md"  # Input file extension (e.g., NEF, mp4)
output_extension="html" # Output file extension (e.g., png, mp3)
conversion_command="marked" # Conversion tool (e.g., convert for ImageMagick, ffmpeg)

for file in *."$input_extension"; do
    # Extract the base name without the extension
    base_name="${file%.*}"
    
    # Construct the output file name
    output_file="${base_name}.${output_extension}"
    
    echo "Converting $file to $output_file..."
    # Execute the conversion command
    rm "$output_file"
    "$conversion_command" "$file" > "$output_file"
done
