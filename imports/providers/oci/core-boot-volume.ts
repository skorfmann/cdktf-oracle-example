// https://www.terraform.io/docs/providers/oci/r/core_boot_volume.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "auto_tuned_vpus_per_gb": {
        "type": "string",
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "required": true
      },
      "backup_policy_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
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
      "image_id": {
        "type": "string",
        "computed": true
      },
      "is_auto_tune_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_hydrated": {
        "type": "bool",
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "size_in_gbs": {
        "type": "string",
        "optional": true,
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
      "volume_group_id": {
        "type": "string",
        "computed": true
      },
      "vpus_per_gb": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "source_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
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

export interface CoreBootVolumeConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly backupPolicyId?: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isAutoTuneEnabled?: boolean;
  readonly kmsKeyId?: string;
  readonly sizeInGbs?: string;
  readonly vpusPerGb?: string;
  /** source_details block */
  readonly sourceDetails: CoreBootVolumeSourceDetails[];
  /** timeouts block */
  readonly timeouts?: CoreBootVolumeTimeouts;
}
export interface CoreBootVolumeSourceDetails {
  readonly id: string;
  readonly type: string;
}
export interface CoreBootVolumeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreBootVolume extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreBootVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_boot_volume',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._backupPolicyId = config.backupPolicyId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._isAutoTuneEnabled = config.isAutoTuneEnabled;
    this._kmsKeyId = config.kmsKeyId;
    this._sizeInGbs = config.sizeInGbs;
    this._vpusPerGb = config.vpusPerGb;
    this._sourceDetails = config.sourceDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_tuned_vpus_per_gb - computed: true, optional: false, required: true
  public get autoTunedVpusPerGb() {
    return this.getStringAttribute('auto_tuned_vpus_per_gb');
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }

  // backup_policy_id - computed: true, optional: true, required: false
  private _backupPolicyId?: string;
  public get backupPolicyId() {
    return this._backupPolicyId ?? this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string | undefined) {
    this._backupPolicyId = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // is_auto_tune_enabled - computed: true, optional: true, required: false
  private _isAutoTuneEnabled?: boolean;
  public get isAutoTuneEnabled() {
    return this._isAutoTuneEnabled ?? this.getBooleanAttribute('is_auto_tune_enabled');
  }
  public set isAutoTuneEnabled(value: boolean | undefined) {
    this._isAutoTuneEnabled = value;
  }

  // is_hydrated - computed: true, optional: false, required: true
  public get isHydrated() {
    return this.getBooleanAttribute('is_hydrated');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // size_in_gbs - computed: true, optional: true, required: false
  private _sizeInGbs?: string;
  public get sizeInGbs() {
    return this._sizeInGbs ?? this.getStringAttribute('size_in_gbs');
  }
  public set sizeInGbs(value: string | undefined) {
    this._sizeInGbs = value;
  }

  // size_in_mbs - computed: true, optional: false, required: true
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: true
  public systemTags(key: string): string {
    return new StringMap(this, 'system_tags').lookup(key);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // volume_group_id - computed: true, optional: false, required: true
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }

  // vpus_per_gb - computed: true, optional: true, required: false
  private _vpusPerGb?: string;
  public get vpusPerGb() {
    return this._vpusPerGb ?? this.getStringAttribute('vpus_per_gb');
  }
  public set vpusPerGb(value: string | undefined) {
    this._vpusPerGb = value;
  }

  // source_details - computed: false, optional: false, required: true
  private _sourceDetails: CoreBootVolumeSourceDetails[];
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public set sourceDetails(value: CoreBootVolumeSourceDetails[]) {
    this._sourceDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreBootVolumeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreBootVolumeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      backup_policy_id: this._backupPolicyId,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      is_auto_tune_enabled: this._isAutoTuneEnabled,
      kms_key_id: this._kmsKeyId,
      size_in_gbs: this._sizeInGbs,
      vpus_per_gb: this._vpusPerGb,
      source_details: this._sourceDetails,
      timeouts: this._timeouts,
    };
  }
}
