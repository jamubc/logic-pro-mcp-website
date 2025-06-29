export interface Tool {
  name: string
  description: string
  category: 'status' | 'creation' | 'organization' | 'templates' | 'effects' | 'project'
  icon: string
}

export const tools: Tool[] = [
  // Status & Information
  {
    name: 'get_logic_status',
    description: 'Check if Logic Pro is running and connected',
    category: 'status',
    icon: 'Activity'
  },
  {
    name: 'get_project_info',
    description: 'Get current project name, path, and metadata',
    category: 'status',
    icon: 'FileText'
  },
  {
    name: 'get_tracks',
    description: 'List all tracks with their properties',
    category: 'status',
    icon: 'List'
  },
  {
    name: 'get_transport_state',
    description: 'Get playback status and timeline position',
    category: 'status',
    icon: 'Play'
  },
  
  // Track Creation
  {
    name: 'create_midi_track',
    description: 'Create a new MIDI track with optional name',
    category: 'creation',
    icon: 'Piano'
  },
  {
    name: 'create_audio_track',
    description: 'Create mono/stereo/surround audio tracks',
    category: 'creation',
    icon: 'Mic'
  },
  {
    name: 'create_bus_track',
    description: 'Create auxiliary bus for effects routing',
    category: 'creation',
    icon: 'Share2'
  },
  {
    name: 'create_track_with_melody',
    description: 'Generate a simple melody in any key',
    category: 'creation',
    icon: 'Music'
  },
  {
    name: 'create_track_with_chord_progression',
    description: 'Generate pop, jazz, blues chord progressions',
    category: 'creation',
    icon: 'Music2'
  },
  {
    name: 'create_track_with_advanced_melody',
    description: 'Theory-aware melodies with contours and patterns',
    category: 'creation',
    icon: 'Sparkles'
  },
  {
    name: 'create_track_with_bass_line',
    description: 'Walking bass, root-fifth, and octave patterns',
    category: 'creation',
    icon: 'Waves'
  },
  
  // Organization & Workflow
  {
    name: 'set_track_color',
    description: 'Color-code tracks for visual organization',
    category: 'organization',
    icon: 'Palette'
  },
  {
    name: 'auto_color_tracks',
    description: 'Automatically color tracks by instrument type',
    category: 'organization',
    icon: 'PaintBucket'
  },
  {
    name: 'organize_tracks_by_type',
    description: 'Group and color-code tracks by category',
    category: 'organization',
    icon: 'FolderTree'
  },
  {
    name: 'create_track_folder',
    description: 'Create track stacks for organization',
    category: 'organization',
    icon: 'Folder'
  },
  {
    name: 'create_marker',
    description: 'Add markers at specific bar numbers',
    category: 'organization',
    icon: 'Flag'
  },
  {
    name: 'create_song_sections',
    description: 'Mark intro, verse, chorus sections',
    category: 'organization',
    icon: 'Map'
  },
  {
    name: 'create_cycle_region',
    description: 'Set loop regions for recording/editing',
    category: 'organization',
    icon: 'Repeat'
  },
  
  // Project Templates
  {
    name: 'list_available_templates',
    description: 'Show all available project templates',
    category: 'templates',
    icon: 'Layout'
  },
  {
    name: 'create_project_template',
    description: 'Rock, electronic, orchestral setups',
    category: 'templates',
    icon: 'FileMusic'
  },
  {
    name: 'setup_recording_template',
    description: 'Multi-take recording configurations',
    category: 'templates',
    icon: 'Mic2'
  },
  {
    name: 'create_mixing_template',
    description: 'Professional mix bus routing setup',
    category: 'templates',
    icon: 'Sliders'
  },
  
  // Effects & Processing
  {
    name: 'add_effect_to_track',
    description: 'Insert EQ, compression, reverb, delays',
    category: 'effects',
    icon: 'Zap'
  },
  {
    name: 'apply_vocal_chain',
    description: 'Complete vocal processing chains',
    category: 'effects',
    icon: 'Mic'
  },
  {
    name: 'add_send_effect',
    description: 'Configure reverb/delay sends',
    category: 'effects',
    icon: 'Send'
  },
  {
    name: 'apply_mix_bus_processing',
    description: 'Professional mix bus chain',
    category: 'effects',
    icon: 'Cpu'
  },
  {
    name: 'suggest_effect_for_description',
    description: 'AI effect recommendations (warm, bright, etc)',
    category: 'effects',
    icon: 'Lightbulb'
  },
  
  // Project Management
  {
    name: 'save_project',
    description: 'Save or Save As current project',
    category: 'project',
    icon: 'Save'
  },
  {
    name: 'export_project',
    description: 'Bounce to MP3, WAV, AIFF, M4A',
    category: 'project',
    icon: 'Download'
  },
]

export const categories = {
  status: {
    title: 'Status & Information',
    description: 'Monitor Logic Pro state and project details',
    icon: 'Activity'
  },
  creation: {
    title: 'Track Creation',
    description: 'Create tracks with AI-generated music',
    icon: 'Music'
  },
  organization: {
    title: 'Organization',
    description: 'Structure and organize your projects',
    icon: 'FolderTree'
  },
  templates: {
    title: 'Templates',
    description: 'Quick-start project configurations',
    icon: 'Layout'
  },
  effects: {
    title: 'Effects & Processing',
    description: 'Apply professional effects and mixing',
    icon: 'Zap'
  },
  project: {
    title: 'Project Management',
    description: 'Save and export your music',
    icon: 'Save'
  },
}