// https://www.terraform.io/docs/providers/oci/r/data_oci_core_images.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "images": {
        "type": [
          "list",
          [
            "object",
            {
              "agent_features": [
                "list",
                [
                  "object",
                  {
                    "is_management_supported": "bool",
                    "is_monitoring_supported": "bool"
                  }
                ]
              ],
              "base_image_id": "string",
              "compartment_id": "string",
              "create_image_allowed": "bool",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "image_source_details": [
                "list",
                [
                  "object",
                  {
                    "bucket_name": "string",
                    "namespace_name": "string",
                    "object_name": "string",
                    "operating_system": "string",
                    "operating_system_version": "string",
                    "source_image_type": "string",
                    "source_type": "string",
                    "source_uri": "string"
                  }
                ]
              ],
              "instance_id": "string",
              "launch_mode": "string",
              "launch_options": [
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
              "operating_system": "string",
              "operating_system_version": "string",
              "size_in_mbs": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "operating_system": {
        "type": "string",
        "optional": true
      },
      "operating_system_version": {
        "type": "string",
        "optional": true
      },
      "shape": {
        "type": "string",
        "optional": true
      },
      "sort_by": {
        "type": "string",
        "optional": true
      },
      "sort_order": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreImagesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly operatingSystem?: string;
  readonly operatingSystemVersion?: string;
  readonly shape?: string;
  readonly sortBy?: string;
  readonly sortOrder?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciCoreImagesFilter[];
}
export class DataOciCoreImagesImagesAgentFeatures extends ComplexComputedList {

  // is_management_supported - computed: true, optional: false, required: true
  public get isManagementSupported() {
    return this.getBooleanAttribute('is_management_supported');
  }

  // is_monitoring_supported - computed: true, optional: false, required: true
  public get isMonitoringSupported() {
    return this.getBooleanAttribute('is_monitoring_supported');
  }
}
export class DataOciCoreImagesImagesImageSourceDetails extends ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: true
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // namespace_name - computed: true, optional: false, required: true
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // object_name - computed: true, optional: false, required: true
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // operating_system - computed: true, optional: false, required: true
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // operating_system_version - computed: true, optional: false, required: true
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }

  // source_image_type - computed: true, optional: false, required: true
  public get sourceImageType() {
    return this.getStringAttribute('source_image_type');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // source_uri - computed: true, optional: false, required: true
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
}
export class DataOciCoreImagesImagesLaunchOptions extends ComplexComputedList {

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
export class DataOciCoreImagesImages extends ComplexComputedList {

  // agent_features - computed: true, optional: false, required: true
  public get agentFeatures() {
    return 'not implemented' as any;
  }

  // base_image_id - computed: true, optional: false, required: true
  public get baseImageId() {
    return this.getStringAttribute('base_image_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_image_allowed - computed: true, optional: false, required: true
  public get createImageAllowed() {
    return this.getBooleanAttribute('create_image_allowed');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_source_details - computed: true, optional: false, required: true
  public get imageSourceDetails() {
    return 'not implemented' as any;
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // launch_mode - computed: true, optional: false, required: true
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // launch_options - computed: true, optional: false, required: true
  public get launchOptions() {
    return 'not implemented' as any;
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
}
export interface DataOciCoreImagesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreImages extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_images',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._operatingSystem = config.operatingSystem;
    this._operatingSystemVersion = config.operatingSystemVersion;
    this._shape = config.shape;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
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

  // images - computed: true, optional: false, required: true
  public images(index: string) {
    return new DataOciCoreImagesImages(this, 'images', index);
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string;
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public set operatingSystem(value: string | undefined) {
    this._operatingSystem = value;
  }

  // operating_system_version - computed: false, optional: true, required: false
  private _operatingSystemVersion?: string;
  public get operatingSystemVersion() {
    return this._operatingSystemVersion;
  }
  public set operatingSystemVersion(value: string | undefined) {
    this._operatingSystemVersion = value;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string;
  public get shape() {
    return this._shape;
  }
  public set shape(value: string | undefined) {
    this._shape = value;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string;
  public get sortBy() {
    return this._sortBy;
  }
  public set sortBy(value: string | undefined) {
    this._sortBy = value;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string;
  public get sortOrder() {
    return this._sortOrder;
  }
  public set sortOrder(value: string | undefined) {
    this._sortOrder = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreImagesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreImagesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      operating_system: this._operatingSystem,
      operating_system_version: this._operatingSystemVersion,
      shape: this._shape,
      sort_by: this._sortBy,
      sort_order: this._sortOrder,
      state: this._state,
      filter: this._filter,
    };
  }
}
