// https://www.terraform.io/docs/providers/oci/r/core_volume_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "attachment_type": {
        "type": "string",
        "required": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "chap_secret": {
        "type": "string",
        "computed": true
      },
      "chap_username": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "device": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
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
        "required": true
      },
      "ipv4": {
        "type": "string",
        "computed": true
      },
      "iqn": {
        "type": "string",
        "computed": true
      },
      "is_pv_encryption_in_transit_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_read_only": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_shareable": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "use_chap": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "volume_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
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

// Configuration

export interface CoreVolumeAttachmentConfig extends TerraformMetaArguments {
  readonly attachmentType: string;
  readonly compartmentId?: string;
  readonly device?: string;
  readonly displayName?: string;
  readonly instanceId: string;
  readonly isPvEncryptionInTransitEnabled?: boolean;
  readonly isReadOnly?: boolean;
  readonly isShareable?: boolean;
  readonly useChap?: boolean;
  readonly volumeId: string;
  /** timeouts block */
  readonly timeouts?: CoreVolumeAttachmentTimeouts;
}
export interface CoreVolumeAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreVolumeAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreVolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attachmentType = config.attachmentType;
    this._compartmentId = config.compartmentId;
    this._device = config.device;
    this._displayName = config.displayName;
    this._instanceId = config.instanceId;
    this._isPvEncryptionInTransitEnabled = config.isPvEncryptionInTransitEnabled;
    this._isReadOnly = config.isReadOnly;
    this._isShareable = config.isShareable;
    this._useChap = config.useChap;
    this._volumeId = config.volumeId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_type - computed: false, optional: false, required: true
  private _attachmentType: string;
  public get attachmentType() {
    return this._attachmentType;
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // chap_secret - computed: true, optional: false, required: true
  public get chapSecret() {
    return this.getStringAttribute('chap_secret');
  }

  // chap_username - computed: true, optional: false, required: true
  public get chapUsername() {
    return this.getStringAttribute('chap_username');
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // device - computed: true, optional: true, required: false
  private _device?: string;
  public get device() {
    return this._device ?? this.getStringAttribute('device');
  }
  public set device(value: string | undefined) {
    this._device = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }

  // ipv4 - computed: true, optional: false, required: true
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // iqn - computed: true, optional: false, required: true
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean;
  public get isPvEncryptionInTransitEnabled() {
    return this._isPvEncryptionInTransitEnabled ?? this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | undefined) {
    this._isPvEncryptionInTransitEnabled = value;
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean;
  public get isReadOnly() {
    return this._isReadOnly ?? this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | undefined) {
    this._isReadOnly = value;
  }

  // is_shareable - computed: true, optional: true, required: false
  private _isShareable?: boolean;
  public get isShareable() {
    return this._isShareable ?? this.getBooleanAttribute('is_shareable');
  }
  public set isShareable(value: boolean | undefined) {
    this._isShareable = value;
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // use_chap - computed: true, optional: true, required: false
  private _useChap?: boolean;
  public get useChap() {
    return this._useChap ?? this.getBooleanAttribute('use_chap');
  }
  public set useChap(value: boolean | undefined) {
    this._useChap = value;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId: string;
  public get volumeId() {
    return this._volumeId;
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreVolumeAttachmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreVolumeAttachmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_type: this._attachmentType,
      compartment_id: this._compartmentId,
      device: this._device,
      display_name: this._displayName,
      instance_id: this._instanceId,
      is_pv_encryption_in_transit_enabled: this._isPvEncryptionInTransitEnabled,
      is_read_only: this._isReadOnly,
      is_shareable: this._isShareable,
      use_chap: this._useChap,
      volume_id: this._volumeId,
      timeouts: this._timeouts,
    };
  }
}
