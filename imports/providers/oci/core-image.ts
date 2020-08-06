// https://www.terraform.io/docs/providers/oci/r/core_image.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agent_features": {
        "type": [
          "list",
          [
            "object",
            {
              "is_management_supported": "bool",
              "is_monitoring_supported": "bool"
            }
          ]
        ],
        "computed": true
      },
      "base_image_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "create_image_allowed": {
        "type": "bool",
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
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "optional": true
      },
      "launch_mode": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "launch_options": {
        "type": [
          "list",
          [
            "object",
            {
              "boot_volume_type": "string",
              "firmware": "string",
              "is_consistent_volume_naming_enabled": "bool",
              "is_pv_encryption_in_transit_enabled": "bool",
              "network_type": "string",
              "remote_data_volume_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "operating_system": {
        "type": "string",
        "computed": true
      },
      "operating_system_version": {
        "type": "string",
        "computed": true
      },
      "size_in_mbs": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "image_source_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_name": {
              "type": "string",
              "optional": true
            },
            "namespace_name": {
              "type": "string",
              "optional": true
            },
            "object_name": {
              "type": "string",
              "optional": true
            },
            "operating_system": {
              "type": "string",
              "optional": true
            },
            "operating_system_version": {
              "type": "string",
              "optional": true
            },
            "source_image_type": {
              "type": "string",
              "optional": true
            },
            "source_type": {
              "type": "string",
              "required": true
            },
            "source_uri": {
              "type": "string",
              "optional": true
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface CoreImageConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly instanceId?: string;
  readonly launchMode?: string;
  /** image_source_details block */
  readonly imageSourceDetails?: CoreImageImageSourceDetails[];
  /** timeouts block */
  readonly timeouts?: CoreImageTimeouts;
}
export class CoreImageAgentFeatures extends ComplexComputedList {

  // is_management_supported - computed: true, optional: false, required: true
  public get isManagementSupported() {
    return this.getBooleanAttribute('is_management_supported');
  }

  // is_monitoring_supported - computed: true, optional: false, required: true
  public get isMonitoringSupported() {
    return this.getBooleanAttribute('is_monitoring_supported');
  }
}
export class CoreImageLaunchOptions extends ComplexComputedList {

  // boot_volume_type - computed: true, optional: false, required: true
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }

  // firmware - computed: true, optional: false, required: true
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: false, required: true
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // network_type - computed: true, optional: false, required: true
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // remote_data_volume_type - computed: true, optional: false, required: true
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
}
export interface CoreImageImageSourceDetails {
  readonly bucketName?: string;
  readonly namespaceName?: string;
  readonly objectName?: string;
  readonly operatingSystem?: string;
  readonly operatingSystemVersion?: string;
  readonly sourceImageType?: string;
  readonly sourceType: string;
  readonly sourceUri?: string;
}
export interface CoreImageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreImage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreImageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_image',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._instanceId = config.instanceId;
    this._launchMode = config.launchMode;
    this._imageSourceDetails = config.imageSourceDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_features - computed: true, optional: false, required: true
  public agentFeatures(index: string) {
    return new CoreImageAgentFeatures(this, 'agent_features', index);
  }

  // base_image_id - computed: true, optional: false, required: true
  public get baseImageId() {
    return this.getStringAttribute('base_image_id');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // create_image_allowed - computed: true, optional: false, required: true
  public get createImageAllowed() {
    return this.getBooleanAttribute('create_image_allowed');
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // launch_mode - computed: true, optional: true, required: false
  private _launchMode?: string;
  public get launchMode() {
    return this._launchMode ?? this.getStringAttribute('launch_mode');
  }
  public set launchMode(value: string | undefined) {
    this._launchMode = value;
  }

  // launch_options - computed: true, optional: false, required: true
  public launchOptions(index: string) {
    return new CoreImageLaunchOptions(this, 'launch_options', index);
  }

  // operating_system - computed: true, optional: false, required: true
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // operating_system_version - computed: true, optional: false, required: true
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }

  // size_in_mbs - computed: true, optional: false, required: true
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // image_source_details - computed: false, optional: true, required: false
  private _imageSourceDetails?: CoreImageImageSourceDetails[];
  public get imageSourceDetails() {
    return this._imageSourceDetails;
  }
  public set imageSourceDetails(value: CoreImageImageSourceDetails[] | undefined) {
    this._imageSourceDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreImageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreImageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      instance_id: this._instanceId,
      launch_mode: this._launchMode,
      image_source_details: this._imageSourceDetails,
      timeouts: this._timeouts,
    };
  }
}
