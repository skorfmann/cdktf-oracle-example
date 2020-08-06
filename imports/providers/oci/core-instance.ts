// https://www.terraform.io/docs/providers/oci/r/core_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "required": true
      },
      "boot_volume_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "dedicated_vm_host_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "extended_metadata": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "fault_domain": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "hostname_label": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipxe_script": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_pv_encryption_in_transit_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "launch_mode": {
        "type": "string",
        "computed": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "preserve_boot_volume": {
        "type": "bool",
        "optional": true
      },
      "private_ip": {
        "type": "string",
        "computed": true
      },
      "public_ip": {
        "type": "string",
        "computed": true
      },
      "region": {
        "type": "string",
        "computed": true
      },
      "shape": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "system_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_maintenance_reboot_due": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "agent_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "is_management_disabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_monitoring_disabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "create_vnic_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "assign_public_ip": {
              "type": "string",
              "optional": true
            },
            "defined_tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "display_name": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "freeform_tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "hostname_label": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "nsg_ids": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "private_ip": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "skip_source_dest_check": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "subnet_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "vlan_id": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "launch_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "boot_volume_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "firmware": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "is_consistent_volume_naming_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_pv_encryption_in_transit_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "network_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "remote_data_volume_type": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "shape_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "gpu_description": {
              "type": "string",
              "computed": true
            },
            "gpus": {
              "type": "number",
              "computed": true
            },
            "local_disk_description": {
              "type": "string",
              "computed": true
            },
            "local_disks": {
              "type": "number",
              "computed": true
            },
            "local_disks_total_size_in_gbs": {
              "type": "number",
              "computed": true
            },
            "max_vnic_attachments": {
              "type": "number",
              "computed": true
            },
            "memory_in_gbs": {
              "type": "number",
              "computed": true
            },
            "networking_bandwidth_in_gbps": {
              "type": "number",
              "computed": true
            },
            "ocpus": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "processor_description": {
              "type": "string",
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "source_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "boot_volume_size_in_gbs": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "kms_key_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "source_id": {
              "type": "string",
              "required": true
            },
            "source_type": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface CoreInstanceConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly compartmentId: string;
  readonly dedicatedVmHostId?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly extendedMetadata?: { [key: string]: string };
  readonly faultDomain?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly hostnameLabel?: string;
  readonly image?: string;
  readonly ipxeScript?: string;
  readonly isPvEncryptionInTransitEnabled?: boolean;
  readonly metadata?: { [key: string]: string };
  readonly preserveBootVolume?: boolean;
  readonly shape: string;
  readonly state?: string;
  readonly subnetId?: string;
  /** agent_config block */
  readonly agentConfig?: CoreInstanceAgentConfig[];
  /** create_vnic_details block */
  readonly createVnicDetails?: CoreInstanceCreateVnicDetails[];
  /** launch_options block */
  readonly launchOptions?: CoreInstanceLaunchOptions[];
  /** shape_config block */
  readonly shapeConfig?: CoreInstanceShapeConfig[];
  /** source_details block */
  readonly sourceDetails?: CoreInstanceSourceDetails[];
  /** timeouts block */
  readonly timeouts?: CoreInstanceTimeouts;
}
export interface CoreInstanceAgentConfig {
  readonly isManagementDisabled?: boolean;
  readonly isMonitoringDisabled?: boolean;
}
export interface CoreInstanceCreateVnicDetails {
  readonly assignPublicIp?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly hostnameLabel?: string;
  readonly nsgIds?: string[];
  readonly privateIp?: string;
  readonly skipSourceDestCheck?: boolean;
  readonly subnetId?: string;
  readonly vlanId?: string;
}
export interface CoreInstanceLaunchOptions {
  readonly bootVolumeType?: string;
  readonly firmware?: string;
  readonly isConsistentVolumeNamingEnabled?: boolean;
  readonly isPvEncryptionInTransitEnabled?: boolean;
  readonly networkType?: string;
  readonly remoteDataVolumeType?: string;
}
export interface CoreInstanceShapeConfig {
  readonly ocpus?: number;
}
export interface CoreInstanceSourceDetails {
  readonly bootVolumeSizeInGbs?: string;
  readonly kmsKeyId?: string;
  readonly sourceId: string;
  readonly sourceType: string;
}
export interface CoreInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._dedicatedVmHostId = config.dedicatedVmHostId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._extendedMetadata = config.extendedMetadata;
    this._faultDomain = config.faultDomain;
    this._freeformTags = config.freeformTags;
    this._hostnameLabel = config.hostnameLabel;
    this._image = config.image;
    this._ipxeScript = config.ipxeScript;
    this._isPvEncryptionInTransitEnabled = config.isPvEncryptionInTransitEnabled;
    this._metadata = config.metadata;
    this._preserveBootVolume = config.preserveBootVolume;
    this._shape = config.shape;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._agentConfig = config.agentConfig;
    this._createVnicDetails = config.createVnicDetails;
    this._launchOptions = config.launchOptions;
    this._shapeConfig = config.shapeConfig;
    this._sourceDetails = config.sourceDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }

  // boot_volume_id - computed: true, optional: false, required: true
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // dedicated_vm_host_id - computed: true, optional: true, required: false
  private _dedicatedVmHostId?: string;
  public get dedicatedVmHostId() {
    return this._dedicatedVmHostId ?? this.getStringAttribute('dedicated_vm_host_id');
  }
  public set dedicatedVmHostId(value: string | undefined) {
    this._dedicatedVmHostId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // extended_metadata - computed: false, optional: true, required: false
  private _extendedMetadata?: { [key: string]: string };
  public get extendedMetadata() {
    return this._extendedMetadata;
  }
  public set extendedMetadata(value: { [key: string]: string } | undefined) {
    this._extendedMetadata = value;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string;
  public get faultDomain() {
    return this._faultDomain ?? this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string | undefined) {
    this._faultDomain = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string;
  public get hostnameLabel() {
    return this._hostnameLabel ?? this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string | undefined) {
    this._hostnameLabel = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string;
  public get image() {
    return this._image ?? this.getStringAttribute('image');
  }
  public set image(value: string | undefined) {
    this._image = value;
  }

  // ipxe_script - computed: true, optional: true, required: false
  private _ipxeScript?: string;
  public get ipxeScript() {
    return this._ipxeScript ?? this.getStringAttribute('ipxe_script');
  }
  public set ipxeScript(value: string | undefined) {
    this._ipxeScript = value;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean;
  public get isPvEncryptionInTransitEnabled() {
    return this._isPvEncryptionInTransitEnabled ?? this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | undefined) {
    this._isPvEncryptionInTransitEnabled = value;
  }

  // launch_mode - computed: true, optional: false, required: true
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // preserve_boot_volume - computed: false, optional: true, required: false
  private _preserveBootVolume?: boolean;
  public get preserveBootVolume() {
    return this._preserveBootVolume;
  }
  public set preserveBootVolume(value: boolean | undefined) {
    this._preserveBootVolume = value;
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: true
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // shape - computed: false, optional: false, required: true
  private _shape: string;
  public get shape() {
    return this._shape;
  }
  public set shape(value: string) {
    this._shape = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // system_tags - computed: true, optional: false, required: true
  public systemTags(key: string): string {
    return new StringMap(this, 'system_tags').lookup(key);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_reboot_due - computed: true, optional: false, required: true
  public get timeMaintenanceRebootDue() {
    return this.getStringAttribute('time_maintenance_reboot_due');
  }

  // agent_config - computed: false, optional: true, required: false
  private _agentConfig?: CoreInstanceAgentConfig[];
  public get agentConfig() {
    return this._agentConfig;
  }
  public set agentConfig(value: CoreInstanceAgentConfig[] | undefined) {
    this._agentConfig = value;
  }

  // create_vnic_details - computed: false, optional: true, required: false
  private _createVnicDetails?: CoreInstanceCreateVnicDetails[];
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public set createVnicDetails(value: CoreInstanceCreateVnicDetails[] | undefined) {
    this._createVnicDetails = value;
  }

  // launch_options - computed: false, optional: true, required: false
  private _launchOptions?: CoreInstanceLaunchOptions[];
  public get launchOptions() {
    return this._launchOptions;
  }
  public set launchOptions(value: CoreInstanceLaunchOptions[] | undefined) {
    this._launchOptions = value;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig?: CoreInstanceShapeConfig[];
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public set shapeConfig(value: CoreInstanceShapeConfig[] | undefined) {
    this._shapeConfig = value;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails?: CoreInstanceSourceDetails[];
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public set sourceDetails(value: CoreInstanceSourceDetails[] | undefined) {
    this._sourceDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      dedicated_vm_host_id: this._dedicatedVmHostId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      extended_metadata: this._extendedMetadata,
      fault_domain: this._faultDomain,
      freeform_tags: this._freeformTags,
      hostname_label: this._hostnameLabel,
      image: this._image,
      ipxe_script: this._ipxeScript,
      is_pv_encryption_in_transit_enabled: this._isPvEncryptionInTransitEnabled,
      metadata: this._metadata,
      preserve_boot_volume: this._preserveBootVolume,
      shape: this._shape,
      state: this._state,
      subnet_id: this._subnetId,
      agent_config: this._agentConfig,
      create_vnic_details: this._createVnicDetails,
      launch_options: this._launchOptions,
      shape_config: this._shapeConfig,
      source_details: this._sourceDetails,
      timeouts: this._timeouts,
    };
  }
}
