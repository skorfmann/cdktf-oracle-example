// https://www.terraform.io/docs/providers/oci/r/data_oci_core_image.html
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
        "computed": true
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
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "image_id": {
        "type": "string",
        "required": true
      },
      "image_source_details": {
        "type": [
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
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "computed": true
      },
      "launch_mode": {
        "type": "string",
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciCoreImageConfig extends TerraformMetaArguments {
  readonly imageId: string;
}
export class DataOciCoreImageAgentFeatures extends ComplexComputedList {

  // is_management_supported - computed: true, optional: false, required: true
  public get isManagementSupported() {
    return this.getBooleanAttribute('is_management_supported');
  }

  // is_monitoring_supported - computed: true, optional: false, required: true
  public get isMonitoringSupported() {
    return this.getBooleanAttribute('is_monitoring_supported');
  }
}
export class DataOciCoreImageImageSourceDetails extends ComplexComputedList {

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
export class DataOciCoreImageLaunchOptions extends ComplexComputedList {

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

// Resource

export class DataOciCoreImage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreImageConfig) {
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
    this._imageId = config.imageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_features - computed: true, optional: false, required: true
  public agentFeatures(index: string) {
    return new DataOciCoreImageAgentFeatures(this, 'agent_features', index);
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
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId: string;
  public get imageId() {
    return this._imageId;
  }
  public set imageId(value: string) {
    this._imageId = value;
  }

  // image_source_details - computed: true, optional: false, required: true
  public imageSourceDetails(index: string) {
    return new DataOciCoreImageImageSourceDetails(this, 'image_source_details', index);
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
  public launchOptions(index: string) {
    return new DataOciCoreImageLaunchOptions(this, 'launch_options', index);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: this._imageId,
    };
  }
}
